import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveUserToken, setUsername, updateRoom } from 'redux/actions/actions';
import io from 'socket.io-client';
import NewRoomModal from 'components/Modals/NewRoomModal';
import EnterNameModal from 'components/Modals/EnterNameModal';
import Chat from './Chat';
import UserList from './UserList';
import Settings from './Settings';

import './Room.scss';

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      response: 'NONE',
      socket: null
    };
  }

  componentDidMount() {
    const {
      match,
      userToken,
      userName,
      saveUserToken,
      updateRoom
    } = this.props;
    const { roomName } = match.params;
    this.setState(
      state => {
        return {
          ...state,
          socket: io(`http://localhost:7777`)
        };
      },
      () => {
        const { socket } = this.state;
        const message = { roomName, userToken, userName };
        socket.on('connect', () => {
          socket.emit('request room', JSON.stringify(message));
        });
        socket.on('send room', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            const { room, userToken, userName } = parsedMsg;
            const { hostId, messages, users } = room;
            saveUserToken({ roomName, userToken });
            updateRoom({
              userName,
              roomName,
              hostId,
              messages,
              users
            });
            this.setState(state => ({ ...state, response: 'OK' }));
          } else {
            console.log(parsedMsg.error);
            this.setState(state => ({ ...state, response: 'NOK' }));
          }
        });
      }
    );
  }

  handleSubmittedUsername = userName => {
    const { setUsername } = this.props;
    setUsername({ userName });
  };

  render() {
    const { match, userToken, users, userName } = this.props;
    const { response } = this.state;
    return (
      <React.Fragment>
        {!userName ? (
          <Route
            path="/room/:roomName"
            render={props => (
              <EnterNameModal
                {...props}
                handleSubmit={this.handleSubmittedUsername}
              />
            )}
          />
        ) : null}
        {response === 'OK' && (
          <div className="room">
            <h1>{match.params.roomName}</h1>
            <div id="chat">
              {userToken && <Chat roomName={match.params.roomName} />}
            </div>
            <div id="settings">
              <Settings />
            </div>
            <div id="userlist">
              <UserList users={users} />
            </div>
          </div>
        )}
        {response === 'NOK' && <NewRoomModal />}
      </React.Fragment>
    );
  }
}

Room.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      roomName: PropTypes.string.isRequired
    })
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, confirmed: PropTypes.bool })
  ).isRequired,
  setUsername: PropTypes.func.isRequired,
  userToken: PropTypes.string.isRequired,
  saveUserToken: PropTypes.func.isRequired,
  updateRoom: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  roomName: state.room.roomName,
  userToken: state.app.userToken,
  users: state.room.users,
  userName: state.room.userName || state.app.userName
});

const mapDispatchToProps = dispatch => ({
  saveUserToken: payload => dispatch(saveUserToken(payload)),
  setUsername: payload => dispatch(setUsername(payload)),
  updateRoom: payload => dispatch(updateRoom(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);

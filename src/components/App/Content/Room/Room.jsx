import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setUsername, updateRoom } from 'redux/actions/actions';
import axios from 'utils/axios';
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
      response: 'NONE'
    };
  }

  componentDidMount() {
    const { userName, userToken } = this.props;
    if (userName || userToken) {
      this.joinRoom(userName, userToken);
    }
  }

  joinRoom = (userName, userToken) => {
    const { match, updateRoomData } = this.props;
    axios
      .post(
        `api/rooms/${match.params.roomName}`,
        { userName },
        {
          headers: {
            userToken
          }
        }
      )
      .then(response => {
        const {
          roomName,
          users,
          messages,
          userToken,
          userName
        } = response.data;
        updateRoomData({
          roomName,
          users,
          messages,
          userToken,
          userName
        });
        this.setState(state => {
          return { ...state, response: 'OK' };
        });
      })
      .catch(() => {
        this.setState(state => {
          return { ...state, response: 'NOK' };
        });
      });
  };

  handleSubmittedUsername = userName => {
    const { setUsername } = this.props;
    setUsername({ userName });
    this.joinRoom(userName, '');
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
  updateRoomData: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    roomName: state.room.roomName,
    userToken: state.room.userToken,
    users: state.room.users,
    userName: state.app.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsername: payload => dispatch(setUsername(payload)),
    updateRoomData: payload => dispatch(updateRoom(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);

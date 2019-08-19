import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { saveUserToken } from 'actions/appActions';
import {
  createRoom,
  purgeRoom,
  newMessage,
  userJoined,
  userLeft
} from 'actions/roomActions';
import EnterNameModal from 'components/Modals/EnterNameModal';
import Loader from 'components/Generic/Loader';
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
      history,
      match,
      userToken,
      userName,
      newMessage,
      saveUserToken,
      createRoom,
      savedUserName,
      userJoined,
      userLeft
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
        const message = {
          roomName,
          userToken,
          userName: userName || savedUserName
        };
        socket.on('connect', () => {
          socket.emit('request room', JSON.stringify(message));
        });
        socket.on('send room', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            const { room, userToken, userName } = parsedMsg;
            const { hostId, messages, users } = room;
            saveUserToken({ roomName, userToken });
            createRoom({
              userName,
              roomName,
              hostId,
              messages,
              users
            });
            this.setState(state => ({ ...state, response: 'OK' }));
          } else {
            switch (parsedMsg.status) {
              case 404:
                history.push(`/createRoom`);
                break;
              case 409:
                this.setState(state => ({
                  ...state,
                  response: 'USERNAME_TAKEN'
                }));
                break;
              default:
                console.log(parsedMsg.error);
            }
          }
        });
        socket.on('new message', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            newMessage(parsedMsg);
          } else {
            console.log(parsedMsg.error);
          }
        });
        socket.on('user joined', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            const { message, user } = parsedMsg;
            newMessage(message);
            userJoined(user);
          } else {
            console.log(parsedMsg.error);
          }
        });
        socket.on('user left', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            const { message, userId } = parsedMsg;
            newMessage(message);
            userLeft({ userId });
          } else {
            console.log(parsedMsg.error);
          }
        });
      }
    );
  }

  componentWillUnmount() {
    const { purgeRoom } = this.props;
    purgeRoom();
  }

  sendMessage = msgContent => {
    const { match, userToken } = this.props;
    const { socket } = this.state;
    const { roomName } = match.params;
    const message = { roomName, userToken, message: msgContent };
    socket.emit('send message', JSON.stringify(message));
  };

  render() {
    const { hostId, match, users } = this.props;
    const { response } = this.state;
    return (
      <React.Fragment>
        {response === 'NONE' && <Loader />}
        {response === 'OK' && (
          <div className="room">
            <h1>{match.params.roomName}</h1>
            <div id="chat">
              <Chat sendMessage={this.sendMessage} />
            </div>
            <div id="settings">
              <Settings />
            </div>
            <div id="userlist">
              <UserList users={users} hostId={hostId} />
            </div>
          </div>
        )}
        {response === 'USERNAME_TAKEN' && <EnterNameModal />}
      </React.Fragment>
    );
  }
}

Room.propTypes = {
  hostId: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      roomName: PropTypes.string.isRequired
    })
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, confirmed: PropTypes.bool })
  ).isRequired,
  userToken: PropTypes.string.isRequired,
  newMessage: PropTypes.func.isRequired,
  saveUserToken: PropTypes.func.isRequired,
  purgeRoom: PropTypes.func.isRequired,
  createRoom: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  savedUserName: PropTypes.string.isRequired,
  userJoined: PropTypes.func.isRequired,
  userLeft: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  roomName: state.room.roomName,
  userToken: state.app.userToken,
  users: state.room.users,
  userName: state.room.userName,
  hostId: state.room.hostId,
  savedUserName: state.app.userName
});

const mapDispatchToProps = dispatch => ({
  newMessage: payload => dispatch(newMessage(payload)),
  saveUserToken: payload => dispatch(saveUserToken(payload)),
  purgeRoom: () => dispatch(purgeRoom()),
  createRoom: payload => dispatch(createRoom(payload)),
  userJoined: payload => dispatch(userJoined(payload)),
  userLeft: payload => dispatch(userLeft(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);

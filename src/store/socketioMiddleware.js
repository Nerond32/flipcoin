import io from 'socket.io-client';
import {
  INIT_SOCKET,
  REQUEST_ROOM,
  SEND_MESSAGE,
  CHANGE_CONFIRM_STATUS
} from 'actions/socketActions';
import { saveUserToken } from 'actions/appActions';
import {
  createRoom,
  newMessage,
  userJoined,
  userLeft,
  userChangedConfirmStatus
} from 'actions/roomActions';

const createSocketioMiddleware = () => {
  const socket = io(`http://localhost:7777`);
  return store => next => action => {
    const { dispatch } = store;
    switch (action.type) {
      case INIT_SOCKET: {
        socket.on('connect', () => {});
        socket.on('send room', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            const { room, userToken, userName } = parsedMsg;
            const { roomName, hostId, messages, users } = room;
            dispatch(saveUserToken({ roomName, userToken }));
            dispatch(
              createRoom({
                userName,
                roomName,
                hostId,
                messages,
                users
              })
            );
          }
        });
        socket.on('new message', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            dispatch(newMessage(parsedMsg.message));
          } else {
            console.log(parsedMsg.error);
          }
        });
        socket.on('user joined', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            const { message, user } = parsedMsg;
            dispatch(newMessage(message));
            dispatch(userJoined(user));
          } else {
            console.log(parsedMsg.error);
          }
        });
        socket.on('user left', msg => {
          const parsedMsg = JSON.parse(msg);
          if (!parsedMsg.error) {
            const { message, userId } = parsedMsg;
            dispatch(newMessage(message));
            dispatch(userLeft({ userId }));
          } else {
            console.log(parsedMsg.error);
          }
        });
        socket.on('user changed confirm status', msg => {
          const parsedMsg = JSON.parse(msg);
          const { userId, userIsConfirmed } = parsedMsg;
          dispatch(userChangedConfirmStatus({ userId, userIsConfirmed }));
        });
        break;
      }
      case REQUEST_ROOM: {
        const { roomName, userToken, userName } = action.payload;
        const request = { roomName, userToken, userName };
        socket.emit('get room', JSON.stringify(request));
        break;
      }
      case SEND_MESSAGE: {
        const { roomName, userToken, message } = action.payload;
        const msg = { roomName, userToken, message };
        socket.emit('send message', JSON.stringify(msg));
        break;
      }
      case CHANGE_CONFIRM_STATUS: {
        const { roomName, userToken, userIsConfirmed } = action.payload;
        const msg = { roomName, userToken, userIsConfirmed };
        socket.emit('change confirm status', JSON.stringify(msg));
        break;
      }
      default:
    }
    return next(action);
  };
};

export default createSocketioMiddleware();

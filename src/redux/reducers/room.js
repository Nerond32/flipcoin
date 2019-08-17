import {
  HANDLE_NEW_MESSAGE,
  SET_USERNAME,
  UPDATE_ROOM
} from 'redux/actions/actions';

const initialState = {
  userName: '',
  roomName: '',
  hostId: '',
  messages: [],
  users: []
};

const roomReducer = (state = initialState, action) => {
  if (action.type === HANDLE_NEW_MESSAGE) {
    return {
      ...state,
      messages: [...state.messages, action.payload.newMessage]
    };
  }
  if (action.type === SET_USERNAME) {
    const { userName } = action.payload;
    return {
      ...state,
      userName
    };
  }
  if (action.type === UPDATE_ROOM) {
    const { userName, roomName, hostId, messages, users } = action.payload;
    return {
      userName,
      roomName,
      hostId,
      messages,
      users
    };
  }
  return state;
};
export default roomReducer;

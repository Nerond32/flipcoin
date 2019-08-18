import { HANDLE_NEW_MESSAGE, UPDATE_ROOM, PURGE_ROOM } from 'actions';

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
      messages: [...state.messages, action.payload.message]
    };
  }
  if (action.type === PURGE_ROOM) {
    return initialState;
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

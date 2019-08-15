import {
  HANDLE_NEW_MESSAGE,
  SAVE_TOKEN,
  SET_USERNAME,
  UPDATE_MESSAGE,
  UPDATE_ROOM
} from 'redux/actions/actions';

const initialState = {
  userName: '',
  userToken: '',
  roomName: '',
  users: [],
  messages: [],
  messageInput: ''
};

const roomReducer = (state = initialState, action) => {
  if (action.type === HANDLE_NEW_MESSAGE) {
    return {
      ...state,
      messages: [...state.messages, action.payload.newMessage]
    };
  }
  if (action.type === SAVE_TOKEN) {
    const { userName, userToken } = action.payload;
    return {
      ...state,
      userToken,
      userName
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
    const { roomName, users, messages, userToken, userName } = action.payload;
    return {
      ...state,
      roomName,
      users,
      messages,
      userToken,
      userName
    };
  }
  if (action.type === UPDATE_MESSAGE) {
    return {
      ...state,
      messageInput: action.payload.value
    };
  }
  return state;
};
export default roomReducer;

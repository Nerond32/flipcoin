import {
  HANDLE_NEW_MESSAGE,
  SAVE_TOKEN,
  SET_USERNAME,
  UPDATE_MESSAGE,
  UPDATE_ROOM
} from 'redux/actions/actions';

const initialState = {
  username: '',
  token: '',
  name: '',
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
    const { username, token } = action.payload;
    return {
      ...state,
      token,
      username
    };
  }
  if (action.type === SET_USERNAME) {
    const { username } = action.payload;
    return {
      ...state,
      username
    };
  }
  if (action.type === UPDATE_ROOM) {
    const { name, users, messages, token, username } = action.payload;
    return {
      ...state,
      name,
      users,
      messages,
      token,
      username
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

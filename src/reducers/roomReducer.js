import {
  HANDLE_NEW_MESSAGE,
  UPDATE_ROOM,
  PURGE_ROOM,
  USER_JOINED,
  USER_LEFT
} from 'actions';

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
      messages: [...state.messages, action.payload]
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
  if (action.type === USER_JOINED) {
    const { userId, userName } = action.payload;
    return {
      ...state,
      users: [...state.users, { userId, userName, userIsConfirmed: false }]
    };
  }
  if (action.type === USER_LEFT) {
    const { userId } = action.payload;
    return {
      ...state,
      users: [...state.users.filter(user => user.userId !== userId)]
    };
  }
  return state;
};
export default roomReducer;

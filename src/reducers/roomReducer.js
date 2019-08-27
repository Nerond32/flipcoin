import {
  NEW_MESSAGE,
  CREATE_ROOM,
  PURGE_ROOM,
  USER_JOINED,
  USER_LEFT,
  USER_CHANGED_CONFIRM_STATUS
} from 'actions/roomActions';

export const initialState = {
  userName: '',
  roomName: '',
  hostId: '',
  messages: [],
  users: []
};

const roomReducer = (state = initialState, action) => {
  if (action.type === PURGE_ROOM) {
    return initialState;
  }
  if (action.type === CREATE_ROOM) {
    const { userName, roomName, hostId, messages, users } = action;
    return {
      userName,
      roomName,
      hostId,
      messages,
      users
    };
  }
  if (action.type === NEW_MESSAGE) {
    const { msgId, msgType, msgTimestamp, msgAuthor, msgContent } = action;
    return {
      ...state,
      messages: [
        ...state.messages,
        { msgId, msgType, msgTimestamp, msgAuthor, msgContent }
      ]
    };
  }
  if (action.type === USER_JOINED) {
    const { userId, userName } = action;
    return {
      ...state,
      users: [...state.users, { userId, userName, userIsConfirmed: false }]
    };
  }
  if (action.type === USER_LEFT) {
    const { userId } = action;
    return {
      ...state,
      users: [...state.users.filter(user => user.userId !== userId)]
    };
  }
  if (action.type === USER_CHANGED_CONFIRM_STATUS) {
    const { userId, userIsConfirmed } = action;
    const changedUserIndex = state.users.findIndex(
      user => user.userId === userId
    );
    const changedUser = {
      ...state.users[changedUserIndex],
      userIsConfirmed
    };
    const newUsers = [...state.users];
    newUsers[changedUserIndex] = changedUser;
    return {
      ...state,
      users: newUsers
    };
  }
  return state;
};
export default roomReducer;

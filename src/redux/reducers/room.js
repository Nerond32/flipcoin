import { UPDATE_ROOM } from 'redux/actions/actions';

const initialState = {
  name: '',
  users: [],
  messages: []
};

const roomReducer = (state = initialState, action) => {
  if (action.type === UPDATE_ROOM) {
    const { name, users, messages } = action.payload;
    return {
      ...state,
      name,
      users,
      messages
    };
  }
  return state;
};
export default roomReducer;

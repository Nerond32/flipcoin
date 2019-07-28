import { CREATION_FORM_UPDATE_FIELD, UPDATE_ROOM } from 'redux/actions/actions';

const initialState = {
  createRoomForm: { username: '', roomName: '' },
  room: { name: '', users: [], messages: [] }
};

const rootReducer = (state = initialState, action) => {
  if (action.type === CREATION_FORM_UPDATE_FIELD) {
    return {
      ...state,
      createRoomForm: {
        ...state.createRoomForm,
        [action.payload.name]: action.payload.value
      }
    };
  }
  if (action.type === UPDATE_ROOM) {
    const { name, users, messages } = action.payload;
    return {
      ...state,
      room: {
        name,
        users,
        messages
      }
    };
  }
  return state;
};
export default rootReducer;

import { CREATION_FORM_UPDATE_FIELD } from 'redux/actions/actions';

const initialState = {
  createRoomForm: { username: '', roomName: '' },
  room: {}
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
  return state;
};
export default rootReducer;

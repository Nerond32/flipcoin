import { CREATION_FORM_UPDATE_FIELD } from 'redux/actions/actions';

const initialState = {
  username: '',
  roomName: ''
};

const createFormReducer = (state = initialState, action) => {
  if (action.type === CREATION_FORM_UPDATE_FIELD) {
    return {
      ...state,
      [action.payload.name]: action.payload.value
    };
  }
  return state;
};
export default createFormReducer;

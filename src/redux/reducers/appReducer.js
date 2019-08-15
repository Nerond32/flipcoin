import { SAVE_LAST_USER_NAME } from 'redux/actions/actions';

const initialState = {
  userName: ''
};

const appReducer = (state = initialState, action) => {
  if (action.type === SAVE_LAST_USER_NAME) {
    return {
      ...state,
      userName: action.payload.newName
    };
  }
  return state;
};
export default appReducer;

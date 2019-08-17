import { SAVE_USER_TOKEN, SAVE_USERNAME } from 'redux/actions/actions';

const initialState = {
  userName: '',
  userToken: ''
};

const appReducer = (state = initialState, action) => {
  if (action.type === SAVE_USER_TOKEN) {
    const { userToken } = action.payload;
    return {
      ...state,
      userToken
    };
  }
  if (action.type === SAVE_USERNAME) {
    const { userName } = action.payload;
    return {
      ...state,
      userName
    };
  }
  return state;
};
export default appReducer;

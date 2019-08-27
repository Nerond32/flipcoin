import { SAVE_USER_NAME, SAVE_USER_TOKEN } from 'actions/appActions';

export const initialState = {
  userName: '',
  userToken: '',
  errorInfo: ''
};

const appReducer = (state = initialState, action) => {
  if (action.type === SAVE_USER_NAME) {
    const { userName } = action;
    return {
      ...state,
      userName
    };
  }
  if (action.type === SAVE_USER_TOKEN) {
    const { userToken } = action;
    return {
      ...state,
      userToken
    };
  }
  return state;
};
export default appReducer;

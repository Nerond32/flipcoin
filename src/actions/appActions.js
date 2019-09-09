export const SAVE_USER_NAME = 'SAVE_USER_NAME';
export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';

export const saveUserName = ({ userName }) => {
  return { type: SAVE_USER_NAME, userName };
};

export const saveUserToken = ({ userToken }) => {
  return { type: SAVE_USER_TOKEN, userToken };
};

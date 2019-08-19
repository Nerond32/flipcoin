export const SAVE_USER_NAME = 'SAVE_USER_NAME';
export const SAVE_USER_TOKEN = 'SAVE_USER_TOKEN';

export const saveUserName = payload => {
  return { type: SAVE_USER_NAME, payload };
};

export const saveUserToken = payload => {
  return { type: SAVE_USER_TOKEN, payload };
};

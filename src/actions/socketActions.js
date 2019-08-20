export const INIT_SOCKET = 'INIT_SOCKET';
export const REQUEST_ROOM = 'REQUEST_ROOM';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_CONFIRM_STATUS = 'CHANGE_CONFIRM_STATUS';

export const initSocket = () => {
  return { type: INIT_SOCKET };
};

export const requestRoom = payload => {
  return { type: REQUEST_ROOM, payload };
};

export const sendMessage = payload => {
  return { type: SEND_MESSAGE, payload };
};

export const changeConfirmStatus = payload => {
  return { type: CHANGE_CONFIRM_STATUS, payload };
};

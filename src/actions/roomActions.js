export const CREATE_ROOM = 'CREATE_ROOM';
export const PURGE_ROOM = 'PURGE_ROOM';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const USER_JOINED = 'USER_JOINED';
export const USER_LEFT = 'USER_LEFT';
export const USER_CHANGED_CONFIRM_STATUS = 'USER_CHANGED_CONFIRM_STATUS';

export const createRoom = ({ userName, roomName, hostId, messages, users }) => {
  return { type: CREATE_ROOM, userName, roomName, hostId, messages, users };
};

export const purgeRoom = () => {
  return { type: PURGE_ROOM };
};

export const newMessage = ({
  msgId,
  msgType,
  msgTimestamp,
  msgAuthor,
  msgContent
}) => {
  return {
    type: NEW_MESSAGE,
    msgId,
    msgType,
    msgTimestamp,
    msgAuthor,
    msgContent
  };
};

export const userJoined = ({ userId, userName }) => {
  return { type: USER_JOINED, userId, userName };
};

export const userLeft = ({ userId }) => {
  return { type: USER_LEFT, userId };
};

export const userChangedConfirmStatus = ({ userId, userIsConfirmed }) => {
  return { type: USER_CHANGED_CONFIRM_STATUS, userId, userIsConfirmed };
};

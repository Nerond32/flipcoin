export const CREATION_FORM_UPDATE_FIELD = 'CREATION_FORM_UPDATE_FIELD';
export const UPDATE_ROOM = 'UPDATE_ROOM';

export const creationFormUpdateField = payload => {
  return { type: CREATION_FORM_UPDATE_FIELD, payload };
};

export const updateRoom = payload => {
  return { type: UPDATE_ROOM, payload };
};

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createForm from './createForm';
import room from './room';

const createFormPersistConfig = {
  key: 'createForm',
  storage,
  whitelist: ['username']
};

export default combineReducers({
  createForm: persistReducer(createFormPersistConfig, createForm),
  room
});

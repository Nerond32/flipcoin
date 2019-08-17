import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import app from './appReducer';
import room from './room';

const appPersistConfig = {
  key: 'app',
  storage,
  whitelist: ['userName', 'userToken']
};

const roomPersistConfig = {
  key: 'room',
  storage,
  whitelist: []
};

export default combineReducers({
  app: persistReducer(appPersistConfig, app),
  room: persistReducer(roomPersistConfig, room)
});

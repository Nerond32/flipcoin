import React, { memo } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NewRoomModal from 'components/Modals/RoomModal';
import ErrorInfoModal from 'components/Modals/ErrorInfoModal';

import { store, persistor } from 'store/store';
import Homepage from './Homepage';
import Header from './Header';
import Room from './Room';
// eslint-disable-next-line no-unused-vars
import library from './faLibrary';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="c-app">
            <Header />
            <React.Fragment>
              <Route exact path="/" component={Homepage} />
              <Route path="/createRoom" component={NewRoomModal} />
              <Route path="/error/:errorMsg" component={ErrorInfoModal} />
              <Route path="/room/:roomName" component={Room} />
            </React.Fragment>
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default memo(App);

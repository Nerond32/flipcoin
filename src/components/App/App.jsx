import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Header from 'components/App/Header';
import Content from 'components/App/Content';
import { store, persistor } from 'redux/store';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="app">
            <Header />
            <Content />
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

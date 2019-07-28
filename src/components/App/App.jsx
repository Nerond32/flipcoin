import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/store';
import Header from 'components/App/Header';
import Content from 'components/App/Content';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Header />
          <Content />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

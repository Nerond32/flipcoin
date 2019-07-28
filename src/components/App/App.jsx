import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/App/Header';
import Content from 'components/App/Content';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Content />
      </div>
    </BrowserRouter>
  );
};

export default App;

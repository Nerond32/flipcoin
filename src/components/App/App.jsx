import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/App/Header';
import Content from 'components/App/Content';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
};

export default App;

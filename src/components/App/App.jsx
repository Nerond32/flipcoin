import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import Content from './Content';
import Header from './Header';
import Starter from './Starter';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact="/" component={Starter} />
      <Route path="/:room" component={Content} />
    </BrowserRouter>
  );
};

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default App;

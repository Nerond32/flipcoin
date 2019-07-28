import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createRoom } from 'mock/roomAPI';
import axios from 'utils/axios';
import Starter from './Starter';
import Room from './Room';

class Content extends React.PureComponent {
  handleRoomCreation = () => {
    axios
      .get('api/rooms')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    const { history } = this.props;
    history.push(`/room${createRoom()}`);
  };

  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => (
            <Starter {...props} handler={this.handleRoomCreation} />
          )}
        />
        <Route path="/room/:id" component={Room} />
      </React.Fragment>
    );
  }
}

Content.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(Content);

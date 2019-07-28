import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createRoom } from 'mock/roomAPI';
import axios from 'utils/axios';
import Starter from './Starter';
import Room from './Room';

class Content extends React.PureComponent {
  handleRoomCreation = () => {
    const { createRoomForm } = this.props;
    const { roomName, username } = createRoomForm;
    axios
      .post('api/rooms', { roomName, username })
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
  createRoomForm: PropTypes.shape({
    roomName: PropTypes.string,
    username: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return {
    createRoomForm: state.createRoomForm
  };
};

export default connect(mapStateToProps)(withRouter(Content));

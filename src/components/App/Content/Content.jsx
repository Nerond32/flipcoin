import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'utils/axios';
import Starter from './Starter';
import Room from './Room';

class Content extends React.PureComponent {
  handleRoomCreation = event => {
    event.preventDefault();
    const {
      createRoomForm: { roomName, username },
      history
    } = this.props;
    axios
      .post('api/rooms', { roomName, username })
      .then(response => {
        if (response.status === 201) {
          history.push(`/room/${roomName}`);
        }
      })
      .catch(error => {
        console.log(error);
      });
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
    createRoomForm: state.createForm
  };
};

export default connect(mapStateToProps)(withRouter(Content));

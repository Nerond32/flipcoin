import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'utils/axios';
import { saveToken, setUsername } from 'redux/actions/actions';
import Starter from './Starter';
import Room from './Room';
import EnterNameModal from './EnterNameModal';

class Content extends React.PureComponent {
  handleRoomCreation = event => {
    event.preventDefault();
    const {
      createRoomForm: { roomName, username },
      history,
      saveToken
    } = this.props;
    axios
      .post('api/rooms', { roomName, username })
      .then(response => {
        if (response.status === 201) {
          const { username, token } = response.data;
          saveToken({ token, username });
          history.push(`/room/${roomName}`);
        }
      })
      .catch(() => {});
  };

  handleSubmittedUsername = username => {
    const { setUsername } = this.props;
    setUsername({ username });
  };

  render() {
    const { username } = this.props;
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => (
            <Starter {...props} handler={this.handleRoomCreation} />
          )}
        />
        {username ? (
          <Route path="/room/:id" component={Room} />
        ) : (
          <EnterNameModal handleSubmit={this.handleSubmittedUsername} />
        )}
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
  }).isRequired,
  saveToken: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    createRoomForm: state.createForm,
    username: state.room.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveToken: payload => dispatch(saveToken(payload)),
    setUsername: payload => dispatch(setUsername(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Content));

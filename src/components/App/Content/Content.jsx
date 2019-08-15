import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'utils/axios';
import { saveToken, setUsername } from 'redux/actions/actions';
import Starter from './Starter';
import Room from './Room';

class Content extends React.PureComponent {
  handleRoomCreation = event => {
    event.preventDefault();
    const {
      createRoomForm: { roomName, userName },
      history,
      saveToken
    } = this.props;
    axios
      .post('api/rooms', { roomName, userName })
      .then(response => {
        if (response.status === 201) {
          const { userName, userToken } = response.data;
          saveToken({ userToken, userName });
          history.push(`/room/${roomName}`);
        }
      })
      .catch(() => {});
  };

  handleSubmittedUsername = userName => {
    const { setUsername } = this.props;
    setUsername({ userName });
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
        <Route path="/room/:name" component={Room} />
      </React.Fragment>
    );
  }
}

Content.propTypes = {
  createRoomForm: PropTypes.shape({
    roomName: PropTypes.string,
    userName: PropTypes.string
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  saveToken: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    createRoomForm: state.createForm,
    userName: state.room.userName
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

import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'utils/axios';
import { saveUserToken, setUsername } from 'redux/actions/actions';
import CreateRoomForm from 'components/Forms/CreateRoomForm';
import Room from './Room';

class Content extends React.PureComponent {
  handleRoomCreation = ({ roomName, userName }) => {
    const { history, saveUserToken } = this.props;
    axios
      .post('api/rooms', { roomName, userName })
      .then(response => {
        if (response.status === 201) {
          const { userName, userToken } = response.data;
          saveUserToken({ userToken, userName });
          // history.push(`/room/${roomName}`);
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
            <CreateRoomForm {...props} handler={this.handleRoomCreation} />
          )}
        />
        <Route path="/room/:roomName" component={Room} />
      </React.Fragment>
    );
  }
}

Content.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  saveUserToken: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    userName: state.app.userName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveUserToken: payload => dispatch(saveUserToken(payload)),
    setUsername: payload => dispatch(setUsername(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Content));

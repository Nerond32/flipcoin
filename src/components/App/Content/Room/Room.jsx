import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRoom } from 'redux/actions/actions';
import axios from 'utils/axios';
import Chat from './Chat';
import UserList from './UserList';
import Settings from './Settings';
import './Room.scss';

class Room extends React.PureComponent {
  componentDidMount() {
    const { match, userToken, updateRoomData } = this.props;
    axios
      .post(
        `api/rooms/${match.params.id}`,
        { username: 'syf' },
        {
          headers: {
            token: userToken
          }
        }
      )
      .then(response => {
        const { name, users, messages, token } = response.data;
        updateRoomData({
          name,
          users,
          messages,
          token
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { roomName, users } = this.props;
    return (
      <div className="room">
        <h1>{roomName}</h1>
        <div id="chat">{roomName && <Chat />}</div>
        <div id="settings">
          <Settings />
        </div>
        <div id="userlist">
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

Room.propTypes = {
  roomName: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, confirmed: PropTypes.bool })
  ).isRequired,
  userToken: PropTypes.string.isRequired,
  updateRoomData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    roomName: state.room.name,
    userToken: state.room.token,
    users: state.room.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateRoomData: payload => dispatch(updateRoom(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);

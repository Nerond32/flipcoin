import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { updateRoom } from 'redux/actions/actions';
import axios from 'utils/axios';
import Chat from './Chat';
import UserList from './UserList';
import Settings from './Settings';
import './Room.scss';

class Room extends React.PureComponent {
  componentDidMount() {
    const { match, updateRoomData } = this.props;
    axios
      .get(`api/rooms/${match.params.id}`)
      .then(response => {
        const { name, users, messages } = response.data;
        updateRoomData({
          name,
          users,
          messages
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
        <Grid container spacing={2} alignItems="stretch">
          <Grid item xs={8}>
            <Chat />
          </Grid>
          <Grid container xs={4} alignItems="stretch">
            <Grid item xs={12}>
              <Settings />
            </Grid>
            <Grid item xs={12}>
              <UserList users={users} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Room.propTypes = {
  roomName: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, confirmed: PropTypes.bool })
  ).isRequired,
  updateRoomData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    roomName: state.room.name,
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

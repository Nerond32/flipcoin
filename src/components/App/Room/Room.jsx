import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { purgeRoom } from 'actions/roomActions';
import { requestRoom, initSocket } from 'actions/socketActions';
import EnterNameModal from 'components/Modals/EnterNameModal';
import Loader from 'components/Generic/Loader';
import Chat from './Chat';
import UserList from './UserList';
import Settings from './Settings';
import './Room.scss';

class Room extends React.PureComponent {
  componentDidMount() {
    const {
      initSocket,
      match,
      userToken,
      requestRoom,
      userName,
      savedUserName
    } = this.props;
    const { roomName } = match.params;
    const message = {
      roomName,
      userToken,
      userName: userName || savedUserName
    };
    initSocket();
    requestRoom(message);
  }

  componentWillUnmount() {
    const { purgeRoom } = this.props;
    purgeRoom();
  }

  render() {
    const { hostId, match, users } = this.props;
    return (
      <React.Fragment>
        <div className="c-room">
          <h1 className="c-room--h1">{match.params.roomName}</h1>
          <div className="c-room--item__chat">
            <Chat sendMessage={this.sendMessage} />
          </div>
          <div className="c-room--item__settings">
            <Settings />
          </div>
          <div className="c-room--item__userlist">
            <UserList users={users} hostId={hostId} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Room.propTypes = {
  hostId: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  initSocket: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      roomName: PropTypes.string.isRequired
    })
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, confirmed: PropTypes.bool })
  ).isRequired,
  purgeRoom: PropTypes.func.isRequired,
  requestRoom: PropTypes.func.isRequired,
  savedUserName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userToken: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  roomName: state.room.roomName,
  userToken: state.app.userToken,
  users: state.room.users,
  userName: state.room.userName,
  hostId: state.room.hostId,
  savedUserName: state.app.userName
});

const mapDispatchToProps = dispatch => ({
  initSocket: () => dispatch(initSocket()),
  purgeRoom: () => dispatch(purgeRoom()),
  requestRoom: payload => dispatch(requestRoom(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room);

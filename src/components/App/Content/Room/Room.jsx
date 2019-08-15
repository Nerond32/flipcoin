import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateRoom } from 'redux/actions/actions';
import axios from 'utils/axios';
import Chat from './Chat';
import UserList from './UserList';
import Settings from './Settings';
import EnterNameModal from '../EnterNameModal';

import './Room.scss';
import NewRoomModal from './NewRoomModal/NewRoomModal';

class Room extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      response: 'NONE'
    };
  }

  componentDidMount() {
    const { match, userToken, updateRoomData, userName } = this.props;
    axios
      .post(
        `api/rooms/${match.params.name}`,
        { userName },
        {
          headers: {
            userToken
          }
        }
      )
      .then(response => {
        const {
          roomName,
          users,
          messages,
          userToken,
          userName
        } = response.data;
        updateRoomData({
          roomName,
          users,
          messages,
          userToken,
          userName
        });
        this.setState(state => {
          return { ...state, response: 'OK' };
        });
      })
      .catch(() => {
        this.setState(state => {
          return { ...state, response: 'NOK' };
        });
      });
  }

  render() {
    const { match, userToken, users, userName } = this.props;
    const { response } = this.state;
    return (
      <div className="room">
        {response === 'OK' && (
          <div>
            <h1>{match.params.name}</h1>

            {!userName ? (
              <Route
                path="/room/:name"
                render={props => (
                  <EnterNameModal
                    {...props}
                    handleSubmit={this.handleSubmittedUsername}
                  />
                )}
              />
            ) : null}
            <div id="chat">
              {userToken && <Chat roomName={match.params.name} />}
            </div>
            <div id="settings">
              <Settings />
            </div>
            <div id="userlist">
              <UserList users={users} />
            </div>
          </div>
        )}
        {response === 'NOK' && <NewRoomModal />}
      </div>
    );
  }
}

Room.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, confirmed: PropTypes.bool })
  ).isRequired,
  userToken: PropTypes.string.isRequired,
  updateRoomData: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    roomName: state.room.roomName,
    userToken: state.room.userToken,
    users: state.room.users,
    userName: state.createForm.userName
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

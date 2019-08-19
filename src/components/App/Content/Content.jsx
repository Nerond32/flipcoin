import React, { memo, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateRoomForm from 'components/Forms/CreateRoomForm';
import NewRoomModal from 'components/Modals/NewRoomModal';
import ErrorInfoModal from 'components/Modals/ErrorInfoModal';
import { initSocket } from 'actions/socketActions';
import Room from './Room';

const Content = ({ initSocket }) => {
  useEffect(() => {
    initSocket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <React.Fragment>
      <Route exact path="/" component={CreateRoomForm} />
      <Route path="/createRoom" component={NewRoomModal} />
      <Route path="/error/:errorMsg" component={ErrorInfoModal} />
      <Route path="/room/:roomName" component={Room} />
    </React.Fragment>
  );
};

Content.propTypes = {
  initSocket: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  initSocket: () => dispatch(initSocket())
});

export default connect(
  null,
  mapDispatchToProps
)(memo(Content));

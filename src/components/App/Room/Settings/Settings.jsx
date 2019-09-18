import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { changeConfirmStatus } from 'actions/socketActions';
import Button from 'components/Generic/Button';
import RadioButtonGroup from 'components/Generic/RadioButtonGroup';
import './Settings.scss';

const Settings = ({ changeConfirmStatus, roomName, userToken }) => {
  const [userIsConfirmed, setIsUserConfirmed] = useState(false);
  const choices = [
    'Coin flip',
    'D2',
    'D4',
    'D6',
    'D8',
    'D10',
    'D12',
    'D20',
    'D100',
    'Custom dice',
    'Custom range'
  ];
  return (
    <div className="settings">
      <h2>Settings</h2>
      <form className="settings-container">
        <RadioButtonGroup choices={choices} />
        <Button
          classNames={
            userIsConfirmed ? 'button-ready-state' : 'button-not-ready-state'
          }
          onClick={() => {
            setIsUserConfirmed(!userIsConfirmed);
            changeConfirmStatus({
              roomName,
              userToken,
              userIsConfirmed: !userIsConfirmed
            });
          }}
          noBorder
        >
          <FontAwesomeIcon icon={userIsConfirmed ? 'check' : 'times'} />{' '}
          {userIsConfirmed ? 'Ready' : 'Not ready'}
        </Button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  changeConfirmStatus: PropTypes.func.isRequired,
  roomName: PropTypes.string.isRequired,
  userToken: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  roomName: state.room.roomName,
  userToken: state.app.userToken
});

const mapDispatchToProps = dispatch => ({
  changeConfirmStatus: payload => dispatch(changeConfirmStatus(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Settings));

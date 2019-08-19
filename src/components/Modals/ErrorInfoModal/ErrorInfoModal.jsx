import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'components/Generic/Modal';

const ErrorInfoModal = ({ match }) => {
  return (
    <Modal title="Encountered error">
      <div>{match.params.errorMsg}</div>
    </Modal>
  );
};

ErrorInfoModal.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      errorMsg: PropTypes.string.isRequired
    })
  }).isRequired
};

export default withRouter(memo(ErrorInfoModal));

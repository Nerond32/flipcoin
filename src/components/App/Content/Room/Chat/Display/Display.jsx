import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ messages }) => {
  return (
    <div className="chatDisplay">
      {messages.map(msg => {
        return (
          <p key={msg}>
            {msg.source}:{msg.content}
          </p>
        );
      })}
    </div>
  );
};

Display.defaultProps = {
  messages: []
};

Display.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    })
  )
};

export default Display;

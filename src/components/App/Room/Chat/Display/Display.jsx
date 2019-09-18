import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import messageTypes from 'constants/messageTypes';
import './Display.scss';

const Display = ({ messages }) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <div className="chatDisplay">
      {messages.map(message => {
        return (
          <p key={message.msgId}>
            {message.msgType === messageTypes.MESSAGE
              ? `${message.msgAuthor}:${message.msgContent}`
              : message.msgContent}
          </p>
        );
      })}
      <div ref={scrollRef} />
    </div>
  );
};

Display.defaultProps = {
  messages: []
};

Display.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      msgId: PropTypes.string.isRequired,
      msgType: PropTypes.string.isRequired,
      msgAuthor: PropTypes.string.isRequired,
      msgContent: PropTypes.string.isRequired
    })
  )
};

export default memo(Display);

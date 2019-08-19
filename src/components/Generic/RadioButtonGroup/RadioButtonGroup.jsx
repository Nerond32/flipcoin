import React, { memo, useReducer } from 'react';
import PropTypes from 'prop-types';
import './RadioButtonGroup.scss';

const radioButtonGroupReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTION':
      return { choiceId: action.choiceId };
    default:
      return state;
  }
};

const RadioButtonGroup = ({ choices, title }) => {
  const [state, dispatch] = useReducer(radioButtonGroupReducer, {
    choiceId: 0
  });
  return (
    <div className="radio-button-group">
      {title && <h2>{title}</h2>}
      {choices.map((choice, i) => {
        return (
          <div className="radio-button" key={choice}>
            <input
              type="radio"
              id={choice}
              value={choice}
              checked={state.choiceId === i && 'checked'}
              onChange={() => {
                dispatch({
                  type: 'CHANGE_SELECTION',
                  choiceId: i
                });
              }}
            />
            <label htmlFor={choice}>{choice}</label>
          </div>
        );
      })}
    </div>
  );
};

RadioButtonGroup.defaultProps = {
  title: ''
};

RadioButtonGroup.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string
};

export default memo(RadioButtonGroup);

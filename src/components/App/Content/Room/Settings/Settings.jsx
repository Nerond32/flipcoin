import React from 'react';
import Button from 'components/Generic/Button';
import RadioButtonGroup from 'components/Generic/RadioButtonGroup';
import './Settings.scss';

const Settings = () => {
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
        <Button onClick={() => {}}>GO</Button>
      </form>
    </div>
  );
};

export default Settings;

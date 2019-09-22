import React, { memo } from 'react';
import RoomForm from 'components/Forms/RoomForm';
import About from './About';

const Homepage = () => {
  return (
    <div className="homepage">
      <RoomForm />
      <About />
    </div>
  );
};

export default memo(Homepage);

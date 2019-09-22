import React, { memo } from 'react';
import RoomForm from 'components/Forms/RoomForm';
import Intro from './Intro';
import About from './About';
import './Homepage.scss';

const Homepage = () => {
  return (
    <div className="c-homepage">
      <Intro />
      <RoomForm />
      <About />
    </div>
  );
};

export default memo(Homepage);

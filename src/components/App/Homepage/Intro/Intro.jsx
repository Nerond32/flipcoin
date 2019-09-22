import React, { memo } from 'react';

const Intro = () => {
  return (
    <div className="c-intro">
      &emsp;Welcome to the flipcoin, an online dispute solver. Create Your own
      room and invite Your friends to settle a dispute or join the one
      they&apos;ve created.
    </div>
  );
};

export default memo(Intro);

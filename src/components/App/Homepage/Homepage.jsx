import React, { memo } from 'react';
import CreateRoomForm from 'components/Forms/CreateRoomForm';

const Homepage = () => {
  return (
    <div className="homepage">
      <CreateRoomForm />
    </div>
  );
};

export default memo(Homepage);

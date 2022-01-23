import React from 'react';
import './User.scss';

const User = () => {
  return (
    <div className="right">
      <img alt="profile" src="/images/shinung/profile.jpeg" />
      <div className="right-info">
        <span className="right-id">Shinunge-</span>
        <span className="right-name">한신웅</span>
      </div>
    </div>
  );
};

export default User;

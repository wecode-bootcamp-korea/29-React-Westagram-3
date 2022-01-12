import React from 'react';
import './User.scss';

const User = props => {
  return (
    <div className="user">
      <img alt="profile" src="/images/shinung/profile.jpeg" />
      <div className="user--info">
        <span className="user--id">Shinunge-</span>
        <span className="user--name">한신웅</span>
      </div>
    </div>
  );
};

export default User;

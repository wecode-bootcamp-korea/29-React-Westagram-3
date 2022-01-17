import React from 'react';
import './Recommendation.scss';

const Recommendation = ({ name, src }) => {
  return (
    <div className="Recommendation">
      <div className="profile-img">
        <img alt="recommended profile" src={src} />
      </div>
      <div className="name">{name}</div>
      <button className="follow">팔로우</button>
    </div>
  );
};

export default Recommendation;

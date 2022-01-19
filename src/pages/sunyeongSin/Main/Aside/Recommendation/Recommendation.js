import React from 'react';
import './Recommendation.scss';
const Recommendation = ({ img, name, comment }) => {
  return (
    <div className="aside-recommendation-box">
      <img
        alt="aside-recommendation-img"
        src={img}
        className="aside-img img-border-circle"
      />
      <div className="aside-img-owner">
        <p>{name}</p>
        <span>{comment}</span>
      </div>
    </div>
  );
};

export default Recommendation;

import React from 'react';
import './Story.scss';

const Story = ({ img, comment, name }) => {
  return (
    <div className="aside-story-box">
      <img
        alt="aside-story-img"
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

export default Story;

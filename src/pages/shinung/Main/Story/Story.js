import React from 'react';

const Story = ({ story, i }) => {
  return (
    <div className="story-user">
      <img alt="profile" src={story.img} />
      <div className="story-info">
        <p className="story-id">{story.userName}</p>
        <p className="story-name">{story.time}</p>
      </div>
    </div>
  );
};

export default Story;

import React, { useState } from 'react';
import Story from './Story';
import storyData from './storyData';
import './Story.scss';

const Stories = () => {
  const [stories, setStories] = useState(storyData);

  return (
    <div className="story">
      <div className="info">
        <span>스토리</span>
        <span>모두 보기</span>
      </div>
      <p>Hello</p>
      {stories.map((story, i) => (
        <Story story={story} key={i} />
      ))}
    </div>
  );
};

export default Stories;

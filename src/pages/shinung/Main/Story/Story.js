import React from 'react';
import './Story.scss';

const Story = props => {
  return (
    <div className="story">
      <div className="info">
        <span>스토리</span>
        <span>모두 보기</span>
      </div>
      <div className="story-user">
        <img alt="profile" src="/images/shinung/elon.png" />
        <div className="story-info">
          <p className="story-id">Elon_musk</p>
          <p className="story-name">16분 전</p>
        </div>
      </div>
      <div className="story-user">
        <img alt="profile" src="/images/shinung/jobs.png" />
        <div className="story-info">
          <p className="story-id">Steve_Jobs_</p>
          <p className="story-name">42분 전</p>
        </div>
      </div>
      <div className="story-user">
        <img alt="profile" src="/images/shinung/robert.png" />
        <div className="story-info">
          <p className="story-id">robertdowneyjr</p>
          <p className="story-name">1시간 전</p>
        </div>
      </div>
      <div className="story-user">
        <img alt="profile" src="/images/shinung/chris.png" />
        <div className="story-info">
          <p className="story-id">chrishemsworth</p>
          <p className="story-name">2시간 전</p>
        </div>
      </div>
    </div>
  );
};

export default Story;

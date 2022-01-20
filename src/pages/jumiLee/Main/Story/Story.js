import React from 'react';
import './Story.scss';

const story = props => {
  return (
    <div className="articleRightStory">
      <div className="storyHeader">
        <span className="light">스토리</span>
        <span className="bold">모두 보기</span>
      </div>

      <div className="story">
        <img src="/images/jumiLee/1.jpg" />
        <span className="accountRight">
          <span className="bold">_yum_s</span>
          <span className="light">16분 전</span>
        </span>
      </div>

      <div className="story">
        <img src="/images/jumiLee/2.jpg" />
        <span className="accountRight">
          <span className="bold">drink_eat_drink</span>
          <span className="light">3시간 전</span>
        </span>
      </div>

      <div className="story">
        <img src="/images/jumiLee/3.jpg" />
        <span className="accountRight">
          <span className="bold">hyukyc</span>
          <span className="light">20시간 전</span>
        </span>
      </div>

      <div className="story">
        <img src="/images/jumiLee/4.jpg" />
        <span className="accountRight">
          <span className="bold">jminkeek</span>
          <span className="light">7시간 전</span>
        </span>
      </div>
    </div>
  );
};

export default story;

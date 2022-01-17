import React from 'react';
import './Suggestion.scss';

const Suggestion = props => {
  return (
    <div className="suggestion">
      <div className="suggestion--info">
        <span>회원님을 위한 추천</span>
        <span>모두 보기</span>
      </div>
      <div className="suggestion--user">
        <img alt="profile" src="/images/shinung/bill.jpeg" />
        <div className="suggestion--user--info">
          <p className="suggestion--user--id">Bill_Gates</p>
          <p className="suggestion--user--name">
            Obama님 외 14명이 팔로우를 하고 있습니다.
          </p>
        </div>
        <p className="suggestion--follow">팔로우</p>
      </div>
      <div className="suggestion--user">
        <img alt="profile" src="/images/shinung/wecode.jpeg" />
        <div className="suggestion--user--info">
          <p className="suggestion--user--id">wecode_bootcamp</p>
          <p className="suggestion--user--name">
            caldigit_T3님 외 71명이 팔로우를 하고 있습니다.
          </p>
        </div>
        <p className="suggestion--follow">팔로우</p>
      </div>
      <div className="suggestion--user">
        <img alt="profile" src="/images/shinung/starbucks.png" />
        <div className="suggestion--user--info">
          <p className="suggestion--user--id">starbucks_korea</p>
          <p className="suggestion--user--name">
            I_love_coffee님 외 3명이 팔로우를 하고 있습니다.
          </p>
        </div>
        <p className="suggestion--follow">팔로우</p>
      </div>
    </div>
  );
};

export default Suggestion;

import React from 'react';
import './Recommend.scss';

const Recommend = props => {
  return (
    <div class="recommend">
      <div class="recommendHeader">
        <span class="light">회원님을 위한 추천</span>
        <span class="bold">모두 보기</span>
      </div>

      <div class="recommendBox">
        <img src="/images/jumiLee/5.jpg" />
        <div class="recommendAccount">
          <span class="bold">joaaaaaahye</span>
          <span class="light">_legend_a님 외 2명이 팔로우 했습니다.</span>
        </div>
        <span class="followColor">팔로우</span>
      </div>

      <div class="recommendBox">
        <img src="/images/jumiLee/6.jpg" />
        <div class="recommendAccount">
          <span class="bold">rampart81</span>
          <span class="light">ringo.in.seoul님 외 12명이 팔로우 했습니다.</span>
        </div>
        <span class="followColor">팔로우</span>
      </div>

      <div class="recommendBox">
        <img src="/images/jumiLee/7.jpg" />
        <div class="recommendAccount">
          <span class="bold">shawnjjoo</span>
          <span class="light">jiimmylee1220님 외 10명이 팔로우 했습니다.</span>
        </div>
        <span class="followColor">팔로우</span>
      </div>
      <div class="recommendBox">
        <img src="/images/jumiLee/8.jpg" />
        <div class="recommendAccount">
          <span class="bold">parkhyoshin</span>
          <span class="light">dlwnal98님 외 1mk명이 팔로우 했습니다.</span>
        </div>
        <span class="followColor">팔로우</span>
      </div>
    </div>
  );
};

export default Recommend;

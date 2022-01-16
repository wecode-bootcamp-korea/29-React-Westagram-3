import React, { useRef } from 'react';
import { Button } from '../../../../components/Nav/Nav';
import Comment from '../Comment/Comment';
import './Feed.scss';

const Feed = () => {
  const likeRef = useRef();
  const [emptyHeart, filledHeart] = ['far fa-heart', 'fas fa-heart'];
  const handleLike = () => {
    if (likeRef.current.className === emptyHeart) {
      likeRef.current.className = filledHeart;
    } else {
      likeRef.current.className = emptyHeart;
    }
  };
  return (
    <div className="Feed">
      <article className="feed-wrapper">
        <div className="feed-bar">
          <header>
            <div className="profile-img">
              <img alt="feed profile" src="/images/kyeom/pink.png" />
            </div>
            <div className="name">kyeom</div>
          </header>
          <Button
            className="button"
            alt="menu button"
            src="/images/kyeom/icon/more.png"
          />
        </div>
        <section className="feed-img">
          <img alt="feed" src="/images/kyeom/coffee.jpg" />
        </section>
        <section className="button-wrapper">
          <div className="button-left">
            <div className="button">
              <i className={emptyHeart} ref={likeRef} onClick={handleLike} />
            </div>
            <Button
              className="button"
              alt="comment button"
              src="/images/kyeom/icon/comment.png"
            />
            <Button
              className="button"
              alt="share button"
              src="/images/kyeom/icon/send.png"
            />
          </div>
          <Button
            className="button"
            alt="bookmark button"
            src="/images/kyeom/icon/bookmark.png"
          />
        </section>
        <section className="message">
          <span className="name">wecode_bootcamp</span>님 <span>외 29명</span>이
          좋아합니다
        </section>
        <section className="content">
          <span className="name">kyeom</span>
          <span>얼죽아 ٩(•̤̀ᵕ•̤́๑)૭✧</span>
        </section>
        <Comment />
      </article>
    </div>
  );
};

export default Feed;

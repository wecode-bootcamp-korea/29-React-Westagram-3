import React, { useRef, useEffect } from 'react';
import Button from '../../../../components/Button/Button';
import Comment from '../Comment/Comment';
import './Feeds.scss';

const Feed = props => {
  const {
    src,
    userName,
    userImgSrc,
    content,
    isLiked,
    likes,
    whoLikes,
    comments,
  } = props;
  const likeRef = useRef();
  const [emptyHeart, filledHeart] = ['far fa-heart', 'fas fa-heart'];
  const handleLike = () => {
    likeRef.current.className =
      likeRef.current.className === emptyHeart ? filledHeart : emptyHeart;
  };
  useEffect(() => {
    likeRef.current.className = isLiked ? filledHeart : emptyHeart;
  });
  return (
    <article className="Feed">
      <div className="feed-bar">
        <header>
          <div className="profile-img">
            <img alt="feed profile" src={userImgSrc} />
          </div>
          <div className="name">{userName}</div>
        </header>
        <Button
          className="button"
          alt="menu button"
          src="/images/kyeom/icon/more.png"
        />
      </div>
      <section className="feed-img">
        <img alt="feed" src={src} />
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
        <span className="name">{whoLikes}</span>님{' '}
        <span>{`외 ${likes}명`}</span>이 좋아합니다
      </section>
      <section className="content">
        <span className="name">{userName}</span>
        <span>{content}</span>
      </section>
      <Comment comments={comments} />
    </article>
  );
};

const Feeds = ({ feedData }) => {
  return (
    <div className="Feeds">
      {feedData &&
        feedData.map(data => (
          <Feed
            key={data.id}
            id={data.id}
            src={data.src}
            userName={data.userName}
            userImgSrc={data.userImgSrc}
            content={data.content}
            isLiked={data.isLiked}
            likes={data.likes}
            whoLikes={data.whoLikes}
            comments={data.comments}
          />
        ))}
    </div>
  );
};

export default Feeds;

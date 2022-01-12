import React from 'react';
import './Feed.scss';

const Feed = props => {
  return (
    <div className="feeds">
      <article className="feed">
        <div className="feed--user">
          <div className="feed--user--info">
            <img
              alt="profile"
              src="/images/shinung/profile.jpeg"
              className="feed--user--profile"
            />
            <span className="feed--user--name">Shinunge-</span>
          </div>
          <img alt="etc" src="/images/shinung/etc.png" className="etc" />
        </div>
        <img
          alt="feed-image"
          src="/images/shinung/feed.png"
          className="image"
        />
        <div className="evaluation">
          <div>
            <img alt="like" src="./images/shinung/like.png" />
            <img alt="comment" src="./images/shinung/comment.png" />
            <img alt="share" src="./images/shinung/share.png" />
          </div>
          <img
            alt="bookmark"
            src="./images/shinung/bookmark.png"
            className="bookmark"
          />
        </div>
        <div className="howmany">
          <img alt="apple" src="./images/shinung/apple.jpeg" />
          <span>
            <a href="">apple_korea</a>님 <a href="">외 104명</a>이 좋아합니다
          </span>
        </div>

        <div className="content">
          <div>
            <span className="content--user">Shinunge-</span>
            <span className="content--text">
              "산책 언제 가냐"는 표정입니다- 🤣🤣🤣
            </span>
          </div>
        </div>

        <ul className="comments">
          <li className="comment">
            <div>
              <p className="comment--user">wecode_bootcamp</p>
              <p className="comment--text">강아지가 상당히 귀엽네요🐶😘</p>
            </div>
            <p className="comment--delete">삭제</p>
            <i className="far fa-heart like"></i>
            <i className="fas fa-heart liked none"></i>
          </li>
        </ul>

        <submit className="add">
          <input
            type="textarea"
            placeholder="댓글 달기..."
            className="add--input"
          />
          <div>
            <span className="add--btn">게시</span>
          </div>
        </submit>
      </article>
    </div>
  );
};

export default Feed;

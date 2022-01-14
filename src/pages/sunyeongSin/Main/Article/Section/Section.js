import React, { useState } from 'react';
import './Section.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faShareSquare,
  faBox,
} from '@fortawesome/free-solid-svg-icons';
import Comment from './Comment/Comment';

const Section = () => {
  const [comment, setComment] = useState('');

  const [key, setKey] = useState(2);

  const [commentBox, setCommentBox] = useState([
    { key: 1, comment: '재미있네~' },
  ]);
  const changeComment = e => {
    setComment(e.target.value);
  };

  const writeComment = () => {
    setKey(e => e + 1);
    setCommentBox(e => e.concat({ key: key, comment: comment }));
    setComment('');
  };

  const enterComment = e => {
    if (e.key === 'Enter') {
      setKey(e => e + 1);
      setCommentBox(e => e.concat({ key: key, comment: comment }));
      setComment('');
    }
  };

  const removeComment = key => {
    setCommentBox(commentBox.filter(e => e.key !== key));
  };
  return (
    <section className="feed">
      <div className="feed-profile-box">
        <div className="feed-profile">
          <img
            alt="profile-img"
            src="https://cdn.pixabay.com/photo/2021/11/05/12/25/woman-6771278_1280.jpg"
            className="profile-img"
          />
          <span>su__cozy</span>
        </div>
        <p
          className="border-none background-none"
          style={{ fontSize: '20px', marginRight: '5px' }}
        >
          ...
        </p>
      </div>

      <div className="feed-img-box">
        <img
          alt="feed-img"
          src="https://cdn.pixabay.com/photo/2021/12/28/16/35/leopard-6899752_1280.jpg"
          className="feed-img"
        />
      </div>

      <div className="feed-function-box">
        <div className="feed-function-box-first">
          <FontAwesomeIcon icon={faHeart} className="notLike" />
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faShareSquare} />
        </div>
        <div className="feed-function-box-second">
          <FontAwesomeIcon icon={faBox} />
        </div>
      </div>

      <div className="feed-like">
        <img
          alt="feed-like-img"
          src="https://cdn.pixabay.com/photo/2021/10/27/20/14/deer-6748261_1280.jpg"
          className="feed-like-img"
        />
        <span>
          <strong>su__cozy</strong>님 <strong>외 10명</strong>이 좋아합니다.
        </span>
      </div>

      <div className="feed-text">
        <span>
          <strong>su__cozy</strong> 위워크에서 진행한 베이킹 클래스
        </span>
      </div>
      <div className="feed-comment-box">
        {commentBox.map(e => {
          console.log(e);
          // 왜 계속 랜더링 될까
          return (
            <Comment
              data={e}
              key={e.key}
              comment={e.comment}
              remove={removeComment}
            />
          );
        })}
      </div>
      <p className="common" style={{ marginTop: '10px', marginLeft: '10px' }}>
        42분 전
      </p>
      <hr />

      <div className="feed-comment-write-box">
        <input
          type="text"
          className="feed-comment-write"
          placeholder="댓글 달기..."
          value={comment}
          onChange={changeComment}
          onKeyPress={enterComment}
        />
        <button onClick={writeComment}>게시</button>
      </div>
    </section>
  );
};

export default Section;

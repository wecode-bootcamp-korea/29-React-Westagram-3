import React, { useRef, useState, useEffect } from 'react';
import './Feed.scss';

const Feed = ({
  userName,
  userImage,
  feedImage,
  isLiked,
  howmanyImage,
  howmanyUser,
  howmany,
  content,
}) => {
  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  const [comments, setComments] = useState(['']);
  const inputRef = useRef();

  const onPost = e => {
    const content = inputRef.current.value;
    e.preventDefault();

    if (content !== '') {
      setComments([
        ...comments,
        {
          id: Math.random(),
          userName: 'wecode',
          content: content,
          isLiked: true,
        },
      ]);
    }
    inputRef.current.value = '';
  };

  const onRemove = id => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const [like, setLike] = useState([0, 0, 0]);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className="feeds">
      <article className="feed">
        <div className="feed-user">
          <div className="user-info">
            <img alt="profile" src={userImage} className="user-profile" />
            <span className="user-name">{userName}</span>
          </div>
          <img alt="etc" src="/images/shinung/etc.png" className="feed-etc" />
        </div>
        <img alt="feedImage" src={feedImage} className="feedImage" />
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
          <img alt="apple" src={howmanyImage} />
          <p className="howmany-text">
            <a href="">{howmanyUser}</a>님 <a href="">외 {howmany}</a>이
            좋아합니다
          </p>
        </div>

        <div className="content">
          <div>
            <span className="content-user">{userName}</span>
            <span className="content-text">{content}</span>
          </div>
        </div>

        <ul className="comments">
          {comments.map((comment, idx) => (
            <Comments
              key={idx}
              id={comment.id}
              name={comment.userName}
              comment={comment.content}
              handleLike={handleLike}
              like={like}
              onRemove={onRemove}
            />
          ))}
        </ul>
        <form className="add" onSubmit={onPost}>
          <input
            type="textarea"
            placeholder="댓글 달기..."
            className="input"
            ref={inputRef}
          />
          <div className="btn">
            <button type="submit" className="add-btn">
              게시
            </button>
          </div>
        </form>
      </article>
    </div>
  );
};

function Comments({ id, name, comment, handleLike, like, onRemove }) {
  return (
    <li className="comment">
      <div>
        <p className="comment-user">{name}</p>
        <p className="comment-text">{comment}</p>
        <p className="comment-delete" onClick={() => onRemove(id)}>
          삭제
        </p>
      </div>
      {like ? (
        <i className="fas fa-heart liked" onClick={handleLike} />
      ) : (
        <i className="far fa-heart like" onClick={handleLike} />
      )}
    </li>
  );
}

export default Feed;

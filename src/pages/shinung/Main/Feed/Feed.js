import React, { useRef, useState, useEffect } from 'react';
import './Feed.scss';

const Feed = ({ feed }) => {
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
            <img alt="profile" src={feed.userImage} className="user-profile" />
            <span className="user-name">{feed.userName}</span>
          </div>
          <img alt="etc" src="/images/shinung/etc.png" className="feed-etc" />
        </div>
        <img alt="feedImage" src={feed.feedImage} className="feedImage" />
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
          <img alt="apple" src={feed.howmanyImage} />
          <p className="howmany-text">
            <a href="">{feed.howmanyUser}</a>님 <a href="">외 {feed.howmany}</a>
            이 좋아합니다
          </p>
        </div>

        <div className="content">
          <div>
            <span className="content-user">{feed.userName}</span>
            <span className="content-text">{feed.content}</span>
          </div>
        </div>

        <ul className="comments">
          {comments.map((comment, idx) => (
            <Comments
              key={idx}
              comment={comment}
              handleLike={handleLike}
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

function Comments({ comment, handleLike, onRemove }) {
  return (
    <li className="comment">
      <div>
        <p className="comment-user">{comment.userName}</p>
        <p className="comment-text">{comment.content}</p>
        <p className="comment-delete" onClick={() => onRemove(comment.id)}>
          삭제
        </p>
      </div>
      {comment.like ? (
        <i className="fas fa-heart liked" onClick={handleLike} />
      ) : (
        <i className="far fa-heart like" onClick={handleLike} />
      )}
    </li>
  );
}

export default Feed;

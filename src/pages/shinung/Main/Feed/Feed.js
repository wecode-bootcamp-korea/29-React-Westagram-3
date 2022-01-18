import React, { useRef, useState, useEffect } from 'react';
import './Feed.scss';

const Feed = ({
  id,
  userName,
  userImage,
  feedImage,
  isLiked,
  howmanyImage,
  howmanyUser,
  howmany,
  content,
}) => {
  const [comments, setComments] = useState(['']);
  const [input, setInput] = useState('');
  const inputRef = useRef();

  const onKeyPress = e => {
    const comment = e.target.value;
    if (e.key === 'Enter') {
      setComments([
        ...comments,
        {
          id: 1,
          userName: 'wecode',
          content: comment,
          isLiked: true,
        },
      ]);
      inputRef.current.value = '';
    }
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  const onClick = () => {
    setComments([...comments, input]);
  };

  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  return (
    <div className="feeds">
      <article className="feed" id={id}>
        <div className="feed--user">
          <div className="feed--user--info">
            <img
              alt="profile"
              src={userImage}
              className="feed--user--profile"
            />
            <span className="feed--user--name">{userName}</span>
          </div>
          <img alt="etc" src="/images/shinung/etc.png" className="etc" />
        </div>
        <img alt="feed-image" src={feedImage} className="image" />
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
          <span>
            <a href="">{howmanyUser}</a>님 <a href="">외 {howmany}</a>이
            좋아합니다
          </span>
        </div>

        <div className="content">
          <div>
            <span className="content--user">{userName}</span>
            <span className="content--text">{content}</span>
          </div>
        </div>

        <ul className="comments">
          {comments.map(comment => (
            <Comments
              key={comment.id}
              name={comment.userName}
              comment={comment.content}
              handleLike={handleLike}
              like={like}
            />
          ))}
        </ul>
        <div className="add">
          <input
            type="textarea"
            placeholder="댓글 달기..."
            className="add--input"
            onKeyPress={onKeyPress}
            onChange={onChange}
            ref={inputRef}
          />
          <div>
            <span className="add--btn" onClick={onClick}>
              게시
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

function Comments({ key, name, comment, handleLike, like }) {
  return (
    <li className="comment" key={key}>
      <div>
        <p className="comment--user">{name}</p>
        <p className="comment--text">{comment}</p>
        <p className="comment--delete">삭제</p>
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

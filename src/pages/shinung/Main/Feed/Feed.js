import React, { useRef, useState, useEffect } from 'react';
import './Feed.scss';

const Feed = props => {
  // const [comments, setComments] = useState(['강아지가 상당히 귀엽네요🐶😘']);

  const [comments, setComments] = useState(['']);

  const [input, setInput] = useState('');

  const inputRef = useRef();

  const onKeyPress = e => {
    const comment = e.target.value;
    if (e.key === 'Enter') {
      setComments([...comments, comment]);
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
          {/* {comments.map((comment, i) => (
            <Comments
              comment={comment}
              key={i}
              handleLike={handleLike}
              like={like}
            />
          ))} */}
          {comments.map(comment => {
            return (
              <Comments
                key={comment.id}
                name={comment.userName}
                comment={comment.content}
                handleLike={handleLike}
                like={like}
              />
            );
          })}
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

// function Comments({ comment, handleLike, like }) {
//   return (
//     <li className="comment">
//       <div>
//         <p className="comment--user">xeexulee</p>
//         <p className="comment--text">{comment}</p>
//         <p className="comment--delete">삭제</p>
//       </div>
//       {like ? (
//         <i className="fas fa-heart liked" onClick={handleLike} />
//       ) : (
//         <i className="far fa-heart like" onClick={handleLike} />
//       )}
//     </li>
//   );
// }

function Comments({ key, name, comment, handleLike, like }) {
  return (
    <li className="comment" id={key}>
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

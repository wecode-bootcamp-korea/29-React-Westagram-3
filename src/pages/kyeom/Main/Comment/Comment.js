import React, { useState, useRef } from 'react';
import './Comment.scss';

const UploadedComment = ({ id, userName, content, isLiked, deleteComment }) => {
  const [emptyHeart, filledHeart] = ['far', 'fas'];
  const [heart, setHeart] = useState(isLiked ? filledHeart : emptyHeart);
  const handleLike = () => {
    heart === emptyHeart ? setHeart(filledHeart) : setHeart(emptyHeart);
  };

  return (
    <div className="uploaded-comment-wrapper">
      <div className="name">{userName}</div>
      <div className="uploaded-comment">{content}</div>
      <button className="delete" onClick={() => deleteComment(id)}>
        삭제
      </button>
      <div className="like">
        <i className={`${heart} fa-heart`} onClick={handleLike} />
      </div>
    </div>
  );
};

const Comment = ({ comments }) => {
  // const [commentData, setCommentData] = useState(
  //   localStorage.getItem('idAndComment')
  //     ? JSON.parse(localStorage.getItem('idAndComment'))
  //     : []
  // );
  const [commentData, setCommentData] = useState(comments);
  const inputRef = useRef();
  const btnRef = useRef();
  const onPost = event => {
    event.preventDefault();

    const userName = sessionStorage.getItem('id');
    const content = inputRef.current.value;
    inputRef.current.value = null;
    btnRef.current.disabled = true;

    setCommentData(cur => [
      ...cur,
      {
        id: cur.length + 1,
        userName: userName,
        content: content,
        isLiked: false,
      },
    ]);
  };
  // useEffect(() => {
  //   localStorage.setItem('idAndComment', JSON.stringify(commentData));
  // }, [commentData]);

  const handleBtn = () => {
    btnRef.current.disabled = !inputRef.current.value;
  };

  const deleteComment = id => {
    setCommentData(cur => cur.filter(ele => ele.id !== id));
  };

  return (
    <>
      <section className="uploaded-comment">
        {commentData &&
          commentData.map(data => (
            <UploadedComment
              key={data.id}
              id={data.id}
              userName={data.userName}
              content={data.content}
              isLiked={data.isLiked}
              deleteComment={deleteComment}
            />
          ))}
      </section>
      <section className="comment">
        <form className="comment" onSubmit={onPost}>
          <input
            className="comment"
            type="textarea"
            placeholder="댓글 달기…"
            autoComplete="off"
            ref={inputRef}
            onInput={handleBtn}
          />
          <button type="submit" ref={btnRef} disabled>
            게시
          </button>
        </form>
      </section>
    </>
  );
};

export default Comment;

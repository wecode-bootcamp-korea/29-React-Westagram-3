import React, { useState, useRef, useEffect } from 'react';
import './Comment.scss';

const UploadedComment = ({ id, comment, deleteComment, idx }) => {
  const [heart, setHeart] = useState('far');
  const handleLike = () => {
    heart === 'far' ? setHeart('fas') : setHeart('far');
  };

  return (
    <div className="uploaded-comment-wrapper">
      <div className="name">{id}</div>
      <div className="uploaded-comment">{comment}</div>
      <button className="delete" onClick={() => deleteComment(idx)}>
        삭제
      </button>
      <div className="like">
        <i className={`${heart} fa-heart`} onClick={handleLike} />
      </div>
    </div>
  );
};

const Comment = () => {
  const [commentData, setCommentData] = useState(
    localStorage.getItem('idAndComment')
      ? JSON.parse(localStorage.getItem('idAndComment'))
      : []
  );
  const inputRef = useRef();
  const btnRef = useRef();
  const onPost = event => {
    event.preventDefault();

    const id = sessionStorage.getItem('id');
    const comment = inputRef.current.value;
    inputRef.current.value = null;
    btnRef.current.disabled = true;

    setCommentData(cur => [
      ...cur,
      { id: id, comment: comment, idx: Math.random() },
    ]);
  };
  useEffect(() => {
    localStorage.setItem('idAndComment', JSON.stringify(commentData));
  }, [commentData]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/kyeom/commentDataKyeom.json')
  //     .then(res => res.json())
  //     .then(res => setCommentData(res));
  // }, []);

  const handleBtn = () => {
    btnRef.current.disabled = !inputRef.current.value;
  };

  const deleteComment = idx => {
    setCommentData(cur => cur.filter(ele => ele.idx !== idx));
  };

  return (
    <>
      <section className="uploaded-comment">
        {commentData.map(data => (
          <UploadedComment
            id={data.id}
            comment={data.comment}
            key={data.idx}
            idx={data.idx}
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

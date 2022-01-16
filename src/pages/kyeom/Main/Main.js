import React, { useState, useRef, useEffect } from 'react';
import Nav, { Button } from '../../../components/Nav/Nav';
import './Main.scss';

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

const Recommendation = ({ name, src }) => {
  return (
    <div className="Recommendation">
      <div className="profile-img">
        <img alt="recommended profile" src={src} />
      </div>
      <div className="name">{name}</div>
      <button className="follow">팔로우</button>
    </div>
  );
};

const Aside = () => {
  const [right, setRight] = useState(
    (document.documentElement.clientWidth - 935) / 2
  );
  const handleAsideRight = () => {
    setRight((document.documentElement.clientWidth - 935) / 2);
  };
  window.addEventListener('resize', handleAsideRight);

  const recommendationData = [
    {
      name: 'red',
      src: 'https://colourlex.com/wp-content/uploads/2021/02/Chrome-red-painted-swatch-N.jpg.webp',
    },
    {
      name: 'yellow',
      src: 'https://colourlex.com/wp-content/uploads/2021/02/naples-yellow-painted-swatch-300x300.jpg.webp',
    },
    {
      name: 'green',
      src: 'https://colourlex.com/wp-content/uploads/2015/02/viridian-painted-swatch-F-1.jpg.webp',
    },
    {
      name: 'blue',
      src: 'https://colourlex.com/wp-content/uploads/2021/02/manganese-blue-painted-swatch.jpg.webp',
    },
    {
      name: 'violet',
      src: 'https://colourlex.com/wp-content/uploads/2015/05/cobalt-violett-painted-swatch-F.jpg.webp',
    },
  ];
  return (
    <aside
      className="Aside"
      style={{ right: `${right}px` }}
      onLoad={handleAsideRight}
    >
      <div className="side-wrapper">
        <div className="user-wrapper">
          <div className="user-img">
            <img alt="user profile" src="/images/kyeom/wecode.jpg" />
          </div>
          <div className="user-profile">
            <div className="id name">{sessionStorage.getItem('id')}</div>
            <div className="description">wecode 29th</div>
          </div>
          <button className="switch">전환</button>
        </div>
        <div className="recommendation-wrapper">
          <div className="recommendation-header">
            <div>회원님을 위한 추천</div>
            <button>모두 보기</button>
          </div>
          <div className="recommendation-section">
            {recommendationData.map(rec => (
              <Recommendation name={rec.name} src={rec.src} key={rec.name} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

const MainWrapper = () => {
  return (
    <div className="MainWrapper">
      <Feed />
      <Aside />
    </div>
  );
};

const MainKyeom = () => {
  return (
    <>
      <Nav />
      <MainWrapper />
    </>
  );
};

export default MainKyeom;

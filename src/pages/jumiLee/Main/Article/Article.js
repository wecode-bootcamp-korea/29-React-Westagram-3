import React from 'react';
import './Article.scss';

const Article = props => {
  return (
    <article>
      <div className="articleTop">
        <span className="articleTopLeft">
          <img src="/images/jumiLee/me.jpeg" />
          <span className="bold">jumi_lee98</span>
        </span>
        <i className="fas fa-ellipsis-h"></i>
      </div>

      <img className="articleImg" src="/images/jumiLee/coco.jpeg" />

      <div className="articleIcon">
        <span className="articleIconLeft">
          <img src="/images/jumiLee/like.png" />
          <img src="/images/jumiLee/comment.png" />
          <img src="/images/jumiLee/share.png" />
        </span>
        <i className="far fa-bookmark"></i>
      </div>

      <div className="articleLikePeople">
        <img src="/images/jumiLee/coco2.jpeg" />
        <span>
          <span className="bold">aineworld</span>
          <span>님 </span>
          <span className="bold">외 10명</span>이 좋아합니다
        </span>
      </div>

      <div className="articleCommentList">
        <div className="articleComment1">
          <span className="bold">canon_mj</span>
          <span>너무 귀여워요ㅠㅠ</span>
          <span className="light">더 보기</span>
        </div>

        <ul className="articleComment2">
          <li>
            <span>
              <span className="bold">neceosecius</span>
              <span>저희도 갈푸키워요! 갈푸 최고😍</span>
            </span>
            <i className="far fa-heart"></i>
          </li>
        </ul>

        <div className="articleCommentTime">42분 전</div>
      </div>

      <div className="articleCommentPost">
        <input type="text" placeholder="댓글 달기..." />
        <button>게시</button>
      </div>
    </article>
  );
};

export default Article;

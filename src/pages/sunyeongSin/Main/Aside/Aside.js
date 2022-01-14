import React from 'react';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className="aside">
      <div className="aside-profile">
        <img
          alt="profile-img"
          src="https://cdn.pixabay.com/photo/2021/11/05/12/25/woman-6771278_1280.jpg"
          className="profile-img"
        />
        <span>su__cozy</span>
      </div>

      <div className="aside-story">
        <p>스토리</p>
        <div className="aside-story-box">
          <img
            alt="aside-story-img"
            src="https://cdn.pixabay.com/photo/2021/01/19/21/16/cat-5932474_1280.jpg"
            className="aside-img img-border-circle"
          />
          <div className="aside-img-owner">
            <p>gildong</p>
            <span>hi!</span>
          </div>
        </div>
        <div className="aside-story-box">
          <img
            alt="aside-story-img"
            src="https://cdn.pixabay.com/photo/2021/12/27/17/47/animal-6897849_1280.jpg"
            className="aside-img img-border-circle"
          />
          <div className="aside-img-owner">
            <p>java</p>
            <span>difficult!</span>
          </div>
        </div>
        <div className="aside-story-box">
          <img
            alt="aside-story-img"
            src="https://cdn.pixabay.com/photo/2021/11/21/22/08/british-shorthair-6815375__480.jpg"
            className="aside-img img-border-circle"
          />
          <div className="aside-img-owner">
            <p>steve</p>
            <span>hi!</span>
          </div>
        </div>
        <div className="aside-story-box">
          <img
            alt="aside-story-img"
            src="https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625__480.jpg"
            className="aside-img img-border-circle"
          />
          <div className="aside-img-owner">
            <p>buck</p>
            <span>hello!!!!!!</span>
          </div>
        </div>
      </div>

      <div className="aside-recommendation">
        <p>회원님을 위한 추천</p>
        <div className="aside-recommendation-box">
          <img
            alt="aside-recommendation-img"
            src="https://cdn.pixabay.com/photo/2021/12/31/11/51/humboldt-penguin-6905568__480.jpg"
            className="aside-img img-border-circle"
          />
          <div className="aside-img-owner">
            <p>wecode12</p>
            <span>whatup!</span>
          </div>
        </div>
        <div className="aside-recommendation-box">
          <img
            alt="aside-recommendation-img"
            src="https://cdn.pixabay.com/photo/2021/03/31/03/12/cat-6138366__480.jpg"
            className="aside-img img-border-circle"
          />
          <div className="aside-img-owner">
            <p>wstate</p>
            <span>cong</span>
          </div>
        </div>
        <div className="aside-recommendation-box">
          <img
            alt="aside-recommendation-img"
            src="https://cdn.pixabay.com/photo/2021/02/18/18/41/child-6028047__480.jpg"
            className="aside-img img-border-circle"
          />
          <div className="aside-img-owner">
            <p>wecode123333</p>
            <span>hi!ASDASD</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;

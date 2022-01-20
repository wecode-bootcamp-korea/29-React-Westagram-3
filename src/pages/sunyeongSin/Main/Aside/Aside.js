import React, { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './Aside.scss';
import Recommendation from './Recommendation/Recommendation';
import Story from './Story/Story';

const Aside = () => {
  const id = [
    { id: 'abcd' },
    { id: 'awefasdfsds' },
    { id: 'atebat' },
    { id: 'awefasdf' },
    { id: 'ghujkghk' },
    { id: '467467' },
    { id: '123' },
    { id: 'hjkgku54' },
  ];
  const [searchId, setSearchId] = useState(id);
  const [isValid, setIsValid] = useState(false);

  const fnId = i => {
    setSearchId(id);
    console.log('fnId');
    // const data = c => searchId.filter(v => v.id.includes(i.target.value) === true);
    const data = id.filter(v => v.id.includes(i.target.value));
    setSearchId(data);
  };

  const iRef = useRef();
  const onFocus = () => {
    iRef.current.style.display = 'block';
  };
  const onBlur = () => {
    iRef.current.style.display = 'none';
  };

  const visibleEvent = () => {
    setIsValid(true);
  };
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
        {STORY.map(e => (
          <Story key={e.id} img={e.img} name={e.name} comment={e.comment} />
        ))}
      </div>

      <div className="aside-recommendation">
        <p>회원님을 위한 추천</p>
        {RECOMMENDATION.map(e => (
          <Recommendation
            key={e.id}
            img={e.img}
            name={e.name}
            comment={e.comment}
          />
        ))}
      </div>
      <input
        type="text"
        placeholder="검색"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={fnId}
        onClick={visibleEvent}
      />
      <i className="fas fa-search" ref={iRef} />
      <div className={isValid ? 'visible' : 'unvisible'} ref={iRef}>
        {searchId.map(e => {
          console.log('본문');
          return (
            <p key={e.id} style={{ border: '1px solid gray' }}>
              {e.id}
            </p>
          );
        })}
      </div>
    </aside>
  );
};

const RECOMMENDATION = [
  {
    img: 'https://cdn.pixabay.com/photo/2021/12/31/11/51/humboldt-penguin-6905568__480.jpg',
    id: 1,
    name: 'muse',
    comment: 'music is my life',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2021/03/31/03/12/cat-6138366__480.jpg',
    id: 2,
    name: 'green land',
    comment: 'nonono',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2021/02/18/18/41/child-6028047__480.jpg',
    id: 3,
    name: 'maroon5',
    comment: 'why?',
  },
];

const STORY = [
  {
    img: 'https://cdn.pixabay.com/photo/2021/01/19/21/16/cat-5932474_1280.jpg',
    id: 1,
    name: 'gildong',
    comment: 'hi!',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2021/12/27/17/47/animal-6897849_1280.jpg',
    id: 2,
    name: 'java',
    comment: 'difficult!',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2021/11/21/22/08/british-shorthair-6815375__480.jpg',
    id: 3,
    name: 'steve',
    comment: 'hi!!!',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2020/12/01/10/04/dog-5793625__480.jpg',
    id: 4,
    name: 'ivy',
    comment: 'cong',
  },
];

export default Aside;

import React, { useState } from 'react';
import Recommendation from '../Recommendation/Recommendation';
import './Aside.scss';

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

const Aside = () => {
  const [right, setRight] = useState(
    (document.documentElement.clientWidth - 935) / 2
  );
  const handleAsideRight = () => {
    setRight((document.documentElement.clientWidth - 935) / 2);
  };
  window.addEventListener('resize', handleAsideRight);

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

export default Aside;

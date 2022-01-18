import React, { useRef } from 'react';
import './Nav.scss';
import '../../styles/variables.scss';

const Button = ({ className, src, alt }) => {
  return <input type="image" className={className} src={src} alt={alt} />;
};

const buttonData = [
  {
    className: 'menu',
    alt: 'explore button',
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png',
  },
  {
    className: 'menu',
    alt: 'heart button',
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png',
  },
  {
    className: 'menu',
    alt: 'profile button',
    src: 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png',
  },
];

const Nav = () => {
  const iRef = useRef();
  const onFocus = () => {
    iRef.current.className = 'fas fa-search hidden';
  };
  const onBlur = () => {
    iRef.current.className = 'fas fa-search';
  };

  return (
    <div className="Nav">
      <nav>
        <div className="nav-wrapper">
          <h1 className="logo">westagram</h1>
          <div className="search">
            <input
              type="text"
              placeholder="검색"
              onFocus={onFocus}
              onBlur={onBlur}
            />
            <i className="fas fa-search" ref={iRef} />
          </div>
          <div className="menu-wrapper">
            {buttonData.map(data => (
              <Button
                className={data.className}
                alt={data.alt}
                src={data.src}
                key={data.alt}
              />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Button };
export default Nav;

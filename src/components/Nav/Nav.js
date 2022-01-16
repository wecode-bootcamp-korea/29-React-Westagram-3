import React, { useState } from 'react';
import './Nav.scss';

const Button = ({ className, src, alt }) => {
  return <input type="image" className={className} src={src} alt={alt} />;
};

const Search = () => {
  const [searchIcon, setSearchIcon] = useState('');
  const onFocus = () => {
    setSearchIcon(' hidden');
  };
  const onBlur = () => {
    setSearchIcon('');
  };

  return (
    <div className="Search">
      <input type="text" placeholder="검색" onFocus={onFocus} onBlur={onBlur} />
      <i className={`fas fa-search${searchIcon}`} />
    </div>
  );
};

const Nav = () => {
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
  return (
    <div className="Nav">
      <nav>
        <div className="nav-wrapper">
          <h1 className="logo">westagram</h1>
          <Search />
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

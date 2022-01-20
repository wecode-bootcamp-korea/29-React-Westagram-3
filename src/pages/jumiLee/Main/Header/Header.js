import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = props => {
  const navigate = useNavigate();

  const goToLogIn = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <div className="headerLogo">
        <i className="fab fa-instagram" onClick={goToLogIn} />

        <p className="sectionLine">|</p>
        <p className="logoFont" onClick={goToLogIn}>
          Westagram
        </p>
      </div>

      <div className="headerSearchBar">
        <input type="text" placeholder="검색" />
      </div>

      <div className="headerIcon">
        <img src="/images/jumiLee/explore.png" />
        <img className="iconHeart" src="/images/jumiLee/heart.png" />
        <img src="/images/jumiLee/profile.png" />
      </div>
    </header>
  );
};

export default Header;

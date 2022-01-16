import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';
import './Main.scss';

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

import React, { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import Aside from './Aside/Aside';
import './Main.scss';

const MainWrapper = () => {
  const [feedData, setFeedData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/data/kyeom/dataKyeom.json')
      .then(res => res.json())
      .then(res => setFeedData(res));
  }, []);
  return (
    <div className="MainWrapper">
      <Feeds feedData={feedData} />
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

import React from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Article from './Article/Article';
import Account from './Account/Account';
import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
import Footer from './Footer/Footer';

const MainJu = props => {
  return (
    <>
      <Nav />
      <main>
        <Article />
        <div className="main-right">
          <Account />
          <Story />
          <Recommend />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default MainJu;

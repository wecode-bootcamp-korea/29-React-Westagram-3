import React from 'react';
import Nav from '../../../components/Nav/Nav';
import User from './User/User';
import Etc from './Etc/Etc';
import Feed from './Feed/Feed';
import Footer from './Footer/Footer';
import Story from './Story/Story';
import Suggestion from './Suggestion/Suggestion';

const MainShinung = props => {
  return (
    <>
      <Nav />
      <main className="main">
        <Feed />
        <div className="main--right">
          <User />
          <Story />
          <Suggestion />
          <Etc />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainShinung;

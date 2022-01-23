import React from 'react';
import Nav from '../../../components/Nav/Nav';
import User from './User/User';
import Etc from './Etc/Etc';
import Footer from './Footer/Footer';
import Stories from './Story/Stories';
import SuggestionList from './Suggestion/SuggestionList';
import FeedList from './Feed/FeedList';
import './Main.scss';

const MainShinung = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="main-left">
          <FeedList />
        </div>
        <div className="main-right">
          <User />
          <Stories />
          <SuggestionList />
          <Etc />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MainShinung;

import React from 'react';
import './Main.scss';

import Article from './Article/Article';
import Aside from './Aside/Aside';
import Nav from '../../../components/Nav/Nav';
function Main() {
  return (
    <>
      <Nav />
      <main className="main">
        <Article />
        <Aside />
      </main>
    </>
  );
}
export default Main;

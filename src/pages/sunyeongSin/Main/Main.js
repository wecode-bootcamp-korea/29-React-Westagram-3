import React, { useState } from 'react';
import './Main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPlane,
  faPlusSquare,
  faCompass,
  faHeart,
  faComment,
  faShareSquare,
  faBox,
} from '@fortawesome/free-solid-svg-icons';
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

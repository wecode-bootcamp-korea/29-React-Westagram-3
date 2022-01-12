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

// import React from 'react';
// import Feed from './Feed/Feed';
// import Etc from './Etc/Etc';
// import Footer from './Footer/Footer';
// import Navbar from './Navbar/Navbar';
// import Story from './Story/Story';
// import Suggestion from './Suggestion/Suggestion';
// import User from './User/User';
// import './Main.css';

// const Main = (props) => {
//   return (
//     <>
//       <Navbar />
//       <main className="main">
//         <Feed />
//         <div className="main--right">
//           <User />
//           <Story />
//           <Suggestion />
//           <Etc />
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Main;

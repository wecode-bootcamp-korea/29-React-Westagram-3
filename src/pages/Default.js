<<<<<<< HEAD
// import React from 'react';

// const Default = () => {
//   return <div>처음</div>;
// };
=======
import React from 'react';
import { Link } from 'react-router-dom';

const Default = () => {
  return (
    <div className="container">
      <h1>westagram</h1>
      <h2>Team 3</h2>
      <ul>
        <li>
          <Link to="/login-Ju">주스타그램</Link>
        </li>
        <li>
          <Link to="/login-Kyeom">겸스타그램</Link>
        </li>
        <li>
          <Link to="/login-Sinung">웅스타그램</Link>
        </li>
        <li>
          <Link to="/login-su">수스타그램</Link>
        </li>
      </ul>
    </div>
  );
};
>>>>>>> master

// export default Default;

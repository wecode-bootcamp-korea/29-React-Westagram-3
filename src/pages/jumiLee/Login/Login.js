import { useNavigate } from 'react-router-dom';
import './Login.scss';
import React from 'react';

const LoginJu = props => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/main-Ju');
  };

  return (
    <div className="login">
      <div className="loginBox">
        <div className="westagramLogo">
          <h1>Westagram</h1>
        </div>

        <div className="id">
          <input
            type="text"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>

        <div className="pwd">
          <input type="password" id="psw" placeholder="비밀번호" />
        </div>

        <div className="loginBtn">
          <button onClick={goToLogin}>로그인</button>
        </div>

        <div className="question">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginJu;

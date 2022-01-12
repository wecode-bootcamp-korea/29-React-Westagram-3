import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginShinung = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-shinung');
  };

  return (
    <section className="section">
      <main>
        <img
          alt="iphone"
          src="/images/shinung/iphone.png"
          className="main__img"
        />
        <div className="login--form">
          <form className="login">
            <h1 className="login--title">westagram</h1>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="login--id"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="login--password"
            />
            <button className="login--button" onClick={goToMain}>
              로그인
            </button>
            <p className="login--notice"></p>
            <div className="separate">
              <div className="separate--line"></div>
              <p className="separate--text">또는</p>
              <div className="separate--line"></div>
            </div>
            <button className="login--facebook">
              <img alt="facebook" src={'/images/shinung/facebook.svg'} />
              <p>Facebook으로 로그인</p>
            </button>
            <p className="forget--password">비밀번호를 잊으셨나요?</p>
          </form>

          <div className="signin">
            <p>
              계정이 없으신가요?
              <a href="">가입하기</a>
            </p>
          </div>

          <div className="download">
            <div>앱을 다운로드하세요.</div>
            <div>
              <img
                alt="app-store"
                src={'/images/shinung/appstore.png'}
                className="download--app-store"
              />
              <img
                alt="google-play"
                src={'/images/shinung/googleplay.png'}
                className="download--google-play"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LoginShinung;

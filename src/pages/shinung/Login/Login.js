import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './Login.scss';

const LoginShinung = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-shinung');
  };

  const [id, setId] = useState('');
  const handleIdInput = e => {
    setId(e.target.value);
    handleBtn();
  };

  const [pw, setPw] = useState('');
  const handlePwInput = e => {
    setPw(e.target.value);
    handleBtn();
  };

  const [btn, setBtn] = useState(false);

  const handleBtn = () => {
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regEmail.test(id) && pw.length >= 4) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };

  return (
    <section className="section">
      <main>
        <img
          alt="iphone"
          src="/images/shinung/iphone.png"
          className="main-img"
        />
        <div className="login-form">
          <form className="login">
            <h1 className="title">westagram</h1>
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="id"
              onChange={handleIdInput}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="password"
              onChange={handlePwInput}
            />
            {btn ? (
              <button
                style={{ opacity: 1 }}
                className="login-btn"
                onClick={goToMain}
              >
                로그인
              </button>
            ) : (
              <button
                style={{ opacity: 0.5 }}
                className="login-btn"
                onClick={goToMain}
              >
                로그인
              </button>
            )}

            <p className="login-notice" />
            <div className="separate">
              <div className="separate-line" />
              <p className="separate-text">또는</p>
              <div className="separate-line" />
            </div>
            <button className="facebook">
              <img alt="facebook" src="/images/shinung/facebook.svg" />
              <p>Facebook으로 로그인</p>
            </button>
            <p className="forget-password">비밀번호를 잊으셨나요?</p>
          </form>

          <div className="signin">
            <p>
              계정이 없으신가요?
              <a href=""> 가입하기</a>
            </p>
          </div>

          <div className="download">
            <div>앱을 다운로드하세요.</div>
            <div>
              <img
                alt="app-store"
                src="/images/shinung/appstore.png"
                className="app-store"
              />
              <img
                alt="google-play"
                src="/images/shinung/googleplay.png"
                className="google-play"
              />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default LoginShinung;

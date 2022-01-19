import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [inputState, setInputState] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const changeInfo = e => {
    const { name, value } = e.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const login = () => {
    if (inputState.email.length < 5 || !inputState.email.includes('@')) {
      alert('아이디를 정확히 입력하시오.');
      return;
    }
    if (inputState.password.length < 5) {
      alert('비밀번호 5자 이상 입력하세요.');
      return;
    }

    localStorage.setItem('email', inputState.email);

    navigate('/main-su');
  };

  useEffect(() => {
    setIsValid(
      !(
        inputState.email.length > 1 &&
        inputState.password.length > 1 &&
        inputState.email.includes('@')
      )
    );
  }, [inputState]);

  function joinMember() {
    fetch('http://10.58.4.14:8002/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: 'louk@naver.com',
        password: 'tlstnsud1234!@#$',
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result.access_token);
      });
  }

  return (
    <main className="login-container">
      <div className="logo">westagram</div>
      <input
        type="text"
        className="login-email"
        onChange={changeInfo}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        name="email"
      />
      <input
        type="password"
        className="login-password"
        onChange={changeInfo}
        placeholder="비밀번호"
        name="password"
      />
      <button
        className={!isValid ? 'login-button-active' : 'login-button'}
        onClick={login}
        disabled={isValid}
      >
        로그인
      </button>
      <button onClick={joinMember}>회원가입</button>
      <div className="forget-password">비밀번호를 잊으셨나요?</div>
    </main>
  );
}
export default Login;

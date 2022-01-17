import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const navigate = useNavigate();

  const changeInfo = e => {
    if (e.target.className === 'login-id') setId(e.target.value);

    if (e.target.className === 'login-password') setPassword(e.target.value);
  };

  useEffect(() => {
    setIsValid(() => {
      if (id.length >= 5 && password.length >= 5 && id.includes('@'))
        return false;
      else return true;
    });
  }, [id, password]);

  const login = () => {
    if (id.length < 6 || !id.includes('@')) {
      alert('아이디를 정확히 입력하시오.');
      return;
    }
    if (password.length < 5) {
      alert('비밀번호 5자 이상 입력하세요.');
      return;
    }

    //window.location.href = '/main'
    localStorage.setItem('id', id);
    navigate('/main-su');
  };
  useEffect(() => {}, []);

  return (
    <main className="login-container">
      <div className="logo">westagram</div>
      <input
        type="text"
        className="login-id"
        value={id}
        onChange={changeInfo}
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        type="password"
        className="login-password"
        value={password}
        onChange={changeInfo}
        placeholder="비밀번호"
      />
      <button
        className={!isValid ? 'login-button-active' : 'login-button'}
        onClick={login}
        disabled={isValid}
      >
        로그인
      </button>
      <div className="forget-password">비밀번호를 잊으셨나요?</div>
    </main>
  );
}
export default Login;

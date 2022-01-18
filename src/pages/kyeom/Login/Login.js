import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Form = () => {
  const [inputState, setInputState] = useState({
    id: '',
    password: '',
  });
  const btnRef = useRef();
  const handleInput = event => {
    const { name, value } = event.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };
  useEffect(() => {
    btnRef.current.disabled =
      String(inputState.id).length < 5 ||
      String(inputState.password).length < 8;
  }, [inputState]);

  const navigate = useNavigate();
  const idRef = useRef();
  const handleSubmit = event => {
    event.preventDefault();
    sessionStorage.setItem('id', idRef.current.value);
    navigate('/main-Kyeom');
  };

  return (
    <form name="login" onSubmit={handleSubmit}>
      <input
        ref={idRef}
        className="id"
        name="id"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onInput={handleInput}
      />
      <input
        className="password"
        name="password"
        type="password"
        placeholder="비밀번호"
        onInput={handleInput}
      />
      <button ref={btnRef} className="submit" type="submit" disabled>
        로그인
      </button>
    </form>
  );
};

const LoginKyeom = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h1 className="logo">westagram</h1>
        <Form />
        <div className="forget-pw">
          <Link to="">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginKyeom;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Form = () => {
  const [inputState, setInputState] = useState({
    id: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();

    // fetch('http://10.58.2.98:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: inputState.id,
    //     password: inputState.password,
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res));

    sessionStorage.setItem('id', inputState.id);
    navigate('/main-Kyeom');
  };

  const isLoginValid =
    inputState.id.length >= 5 && inputState.password.length >= 8;

  return (
    <form name="login" onSubmit={handleSubmit}>
      <input
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
      <button className="submit" type="submit" disabled={!isLoginValid}>
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

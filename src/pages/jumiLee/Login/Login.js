import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginJu = props => {
  const navigate = useNavigate();

  // const goToMain = () => {
  //   navigate('/main-Ju');
  // };

  // const [inputs, setInputs] = useState({
  //   name: '',
  //   nickname: '',
  // });

  // const { name, nickname } = inputs;

  // const onChange = e => {
  //   const { name, value } = e.target;

  //   setInputs({
  //     ...inputs,
  //     [name]: value,
  //   });
  // };

  // const onReset = () => {
  //   setInputs({
  //     name: '',
  //     nickname: '',
  //   });
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleIdInput = event => {
    setEmail(event.target.value);
  };
  const handlePasswordInput = event => {
    setPassword(event.target.value);
  };

  function signUp() {
    fetch('http://10.58.5.6:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          navigate('/main-Ju');
        } else if (res.message === 'INVALID_USER (password)') {
          alert('비밀번호가 틀렸습니다.');
        }
        console.log('결과 : ', res.message, res.jwt);
      });
  }

  return (
    <div className="login">
      <div className="loginBox">
        <div className="westagramLogo">
          <h1>Westagram</h1>
        </div>

        <div className="id">
          <input
            name="name"
            // value={name}
            onChange={handleIdInput}
            type="text"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>

        <div className="pwd">
          <input
            name="nickname"
            // value={nickname}
            onChange={handlePasswordInput}
            type="password"
            id="psw"
            placeholder="비밀번호"
          />
        </div>

        <div className="GoToMainBtn">
          <button onClick={signUp}>로그인</button>
          {/* <button onClick={onReset}>로그인</button> */}
        </div>

        <div className="question">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginJu;

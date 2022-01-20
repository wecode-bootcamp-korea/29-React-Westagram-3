import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginJu = props => {
  const navigate = useNavigate();

  const goToMain = () => {
    if (email.includes('@') && password.length > 4) {
      navigate('/main-Ju');
    } else {
      alert('가입된 회원이 아닙니다. 다시 입력해주세요.');
    }
  };

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  const handleInput = event => {
    const { name, value } = event.target;

    setInputs({ ...inputs, [name]: value });
  };

  // const handleIdInput = event => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordInput = event => {
  //   setPassword(event.target.value);
  // };

  const [isActive, setIsActive] = useState(false);

  const isPassedLogin = () => {
    return inputs.email.includes('@') && inputs.password.length > 4
      ? setIsActive(true)
      : setIsActive(false);
  };

  // {keyup === 'enter' }

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
          goToMain();
          // navigate('/main-Ju');
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
            name="email"
            value={email}
            onChange={handleInput}
            onKeyUp={isPassedLogin}
            type="text"
            id="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
        </div>

        <div className="pwd">
          <input
            name="password"
            value={password}
            onChange={handleInput}
            onKeyUp={isPassedLogin}
            type="password"
            id="psw"
            placeholder="비밀번호"
          />
        </div>

        <div className="GoToMainBtn">
          <button
            onClick={signUp}
            onClick={goToMain}
            className={isActive ? 'active' : 'unActive'}
            disabled={email === '' || password === '' ? true : false}
          >
            로그인
          </button>
        </div>

        <div className="question">
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginJu;

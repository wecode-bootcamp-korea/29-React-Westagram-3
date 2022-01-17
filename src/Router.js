import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Default from './pages/Default';
import LoginJu from './pages/jumiLee/Login/Login';
import LoginKyeom from './pages/kyeom/Login/Login';
import LoginShinung from './pages/shinung/Login/Login';
import LoginSu from './pages/sunyeongSin/Login/Login';
import MainKyeom from './pages/kyeom/Main/Main';
import MainShinung from './pages/shinung/Main/Main';
import MainSu from './pages/sunyeongSin/Main/Main';
import MainJu from './pages/jumiLee/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/login-Ju" element={<LoginJu />} />
        <Route path="/login-Kyeom" element={<LoginKyeom />} />
        <Route path="/login-shinung" element={<LoginShinung />} />
        <Route path="/login-su" element={<LoginSu />} />

        <Route path="/main-Ju" element={<MainJu />} />
        <Route path="/main-Kyeom" element={<MainKyeom />} />
        <Route path="/main-shinung" element={<MainShinung />} />
        <Route path="/main-su" element={<MainSu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

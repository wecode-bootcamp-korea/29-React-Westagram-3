import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Default from './Default';
import LoginJu from './pages/jumiLee/Login/Login';
import LoginKyeom from './pages/kyeom/Login/Login';
import LoginSinung from './pages/sinung/Login/Login';
import LoginSu from './pages/sunyeongSin/Login/Login';

function Router() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Default />} />
                <Route path='/login-Ju' element={<LoginJu />} />
                <Route path='/login-Kyeom' element={<LoginKyeom />} />
                <Route path='/login-Sinung' element={<LoginSinung />} />
                <Route path='/login-su' element={<LoginSu />} />
            </Routes>
        </BrowserRouter>

    );
};

export default Router;
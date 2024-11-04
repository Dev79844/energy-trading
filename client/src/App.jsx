import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Landing from './pages/landingPage/landing';
import UserDashboard from './pages/userDashboardPage/userDashboard';
import UserSignup from './pages/signupPage/userSignup';
import UserLogin from './pages/loginPage/userLogin';
import ProtectedComponent from './components/RouteManagement/protectedComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/user/signup' element={<UserSignup />}></Route>
        <Route path='/user/login' element={<UserLogin />}></Route>
        <Route path='/user/dashboard' element={<ProtectedComponent><UserDashboard /></ProtectedComponent>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

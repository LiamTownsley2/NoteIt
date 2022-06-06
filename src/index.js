import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Newsletter, SignIn, SignUp } from './pages';
import { NavigationBar } from './components';

import './root.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/newsletter/:id" element={<Newsletter />} />
      </Routes>
    </Router>


  </React.StrictMode>
);
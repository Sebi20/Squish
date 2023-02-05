import React from 'react';
import {Routes, Route, HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Squish from './Components/Squish';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} component={<App />}/>
      <Route path="/squish" element={<Squish />} component={<Squish/>}/>
    </Routes>
  </HashRouter>
);

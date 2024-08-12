import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Layout from './Components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<App/> }/>
          <Route path='about' element={<About/>}/>
          <Route path='blog' element={<Blog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

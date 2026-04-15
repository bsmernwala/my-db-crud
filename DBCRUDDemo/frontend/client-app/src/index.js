import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<MainPage/>
</BrowserRouter>
);

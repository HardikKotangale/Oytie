import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import PopOver from "./components/PopOver";
export {Header,Footer,Maps,PopOver}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


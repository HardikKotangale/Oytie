import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import PopOver from "./components/PopOver";
import CardCarousel from "./components/CardCarousel";
export {Header,Footer,Maps,PopOver,CardCarousel}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


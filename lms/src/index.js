import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import PopOver from "./components/PopOver";
import AboutUs from "./components/AboutUs";
import Queries from "./components/Queries";
import CardCarousel from "./components/CardCarousel";
export {Header,Footer,Maps,PopOver,CardCarousel,Queries,AboutUs}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


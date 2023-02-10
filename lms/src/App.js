import React from "react";
import { useState, useEffect } from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import PopOver from "./components/PopOver";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const oytieLogo=new URL("./images/Oytie.png",import.meta.url);
const facebookLogo=new URL("./images/facebook.png",import.meta.url);
const youtubeLogo=new URL("./images/youtube.png",import.meta.url);
const whatsAppLogo=new URL("./images/whatsapp.png",import.meta.url);
const linkedInLogo=new URL("./images/linkedin.png",import.meta.url);
const instagramLogo=new URL("./images/instagram.png",import.meta.url);
const emailLogo=new URL("./images/email.png",import.meta.url);
const callLogo=new URL("./images/call.png",import.meta.url);

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {setTimeout(() => {setModalShow(true);}, 200)}, []);

  return (
    <> 
      <Header home="Home" navLink1="LMS Portal" navLink2="Job Portal" contactUs="Contact Us" logo={oytieLogo}/>
      <Footer handles1={whatsAppLogo} handles2={instagramLogo} handles3={facebookLogo} handles4={youtubeLogo} handles5={linkedInLogo} contactUs1={callLogo} contactUs2={emailLogo}></Footer>
      <PopOver show={modalShow} onHide={() => setModalShow(false)} />
      </>  
    );
}

export default App;

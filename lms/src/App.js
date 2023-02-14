import React from "react";

import { useState, useEffect } from 'react';
import {Header,Footer,PopOver,CardCarousel} from './index';
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
const Coditas=new URL("./images/Coditas.png",import.meta.url);
const rajaSoftwareLabs=new URL("./images/RajaSoftwareLabs.png",import.meta.url);
const MaxSecure=new URL("./images/MaxSecure.png",import.meta.url);
const quickenSol=new URL("./images/quickenSol.png",import.meta.url);
const zencon=new URL("./images/zencon.png",import.meta.url);
const zensoft=new URL("./images/zensoft.png",import.meta.url);


function App() {
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {setTimeout(() => {setModalShow(true);}, 200)}, []);

  return (
    <> 
  
      <Header home="Home" navLink1="About Us" navLink2="LMS Portal" navLink3="Job Portal" navLink4="Services" 
              dropDownlink1="Manfacurting" dropDownlink2="Design and Development" dropDownlink3="LMS Services" dropDownlink4="Job Services"
              contactUs="Contact Us" logo={oytieLogo}/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, quisquam culpa iusto tempore maxime est id blanditiis dolor in vero provident aliquid reprehenderit. Voluptatum dignissimos recusandae hic, consectetur vel quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quia repellendus atque dolore deserunt nam architecto obcaecati officia facilis? Vel rerum cumque impedit doloremque illo numquam tempore nesciunt? Optio, vitae! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo omnis animi hic laboriosam aliquam laborum, debitis ipsam consequatur commodi iure non pariatur repellendus nihil labore mollitia? Cum doloremque ratione atque!</p>
      <CardCarousel images1={Coditas} images2={MaxSecure} images3={rajaSoftwareLabs} images4={zencon} images5={quickenSol} images6={zensoft} />
    
      <Footer handles1={whatsAppLogo} handles2={instagramLogo} handles3={facebookLogo} handles4={youtubeLogo} handles5={linkedInLogo} contactUs1={callLogo} contactUs2={emailLogo}></Footer>
      <PopOver show={modalShow} onHide={() => setModalShow(false)}  />
      </>  
    );
}

export default App;

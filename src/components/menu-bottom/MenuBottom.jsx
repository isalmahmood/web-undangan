import React, { useEffect, useRef, useState } from "react";
import "./Menu.css";
import sound from "../../assets/sounds/Dan_Shay_Justin Bieber-10,000_Hours.mp3";

const MenuBottom = () => {
  const [audioStatus, changeAudioStatus] = useState(false);
  const myRef = useRef();


  const startAudio = () => {
    myRef.current.play();

    changeAudioStatus(false);
  };

  const pauseAudio = () => {
    myRef.current.pause();
    changeAudioStatus(true);
  };

  // useEffect(() => {
  //   startAudio();
    
  // }, [audioStatus, changeAudioStatus]);

  return (
    <>
      {/* bottom menu */}
      <audio autoPlay
        ref={myRef}
        src={sound}
      />
      {!audioStatus ? (
        <button 
        onClick={pauseAudio}
        className="fixed p-2 right-2 text-white bottom-20 text-center rounded-full drop-shadow-xl">
        <i className="material-icons text-6xl drop-shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">pause_circle</i>
      </button>
        
      ) : (
        <button 
          onClick={startAudio}
          className="fixed p-2 right-2 text-white bottom-20 text-center rounded-full drop-shadow-xl">
          <i className="material-icons text-6xl drop-shadow-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">play_circle</i>
        </button>
      )}


      <nav className="nav">
        <a href="#heroSection" className="nav__link">
          <i className="material-icons nav__icon">dashboard</i>
          <span className="nav__text">Top</span>
        </a>
        <a href="#mempelai" className="nav__link nav__link">
          <i className="material-icons nav__icon">person </i>
          <span className="nav__text">Mempelai</span>
        </a>
        <a href="#lokasi" className="nav__link">
          <i className="material-icons nav__icon">map</i>
          <span className="nav__text">Info</span>
        </a>
        <a href="#gallery" className="nav__link">
          <i className="material-icons nav__icon">photo</i>
          <span className="nav__text">Galery</span>
        </a>
        <a href="#amplop" className="nav__link">
          <i className="material-icons nav__icon">redeem</i>
          <span className="nav__text">Gift</span>
        </a>
      </nav>
      
    </>
  );
};

export default MenuBottom;

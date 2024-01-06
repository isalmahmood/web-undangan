import React, { useEffect } from "react";
import Swal from 'react-sweetalert2';
// import "./MainLayout.module.css";
import plaminan1 from "../assets/img-plaminan1.jpg"
import MenuBottom from "../components/menu-bottom/MenuBottom";
import HeroSection from "../components/hero-section/HeroSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mempelai from "../components/mempelai/Mempelai";
import Gallery from "../components/gallery/Gallery";
import Komentar from "../components/komentar/Komentar";
import InfoAcara from "../components/info-acara/InfoAcara";
import Footer from "../components/footers/Footer";
import Amplop from "../components/amplop/Amplop";

const MainLayout = () => {

  useEffect(() => {
    // alert('asdasd')
      AOS.init();
    
  }, []);

    return(
        <>
          <div className="container mx-auto  p-3 mb-10" style={{ marginBottom: "0px" }}>

              <HeroSection/>
                
                <Mempelai />
                <InfoAcara / >
                <Gallery />
                <Amplop />
              <Komentar />
          </div>
              <Footer />
              <MenuBottom />
        </>
    )
}

export default MainLayout
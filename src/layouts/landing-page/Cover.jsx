import React, { useEffect, useRef, useState } from "react";
import "./cover-styles.css";
import { Link, useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from "../../components/animation-type/Typewriter";

const Cover = () => {
  let { nama } = useParams();
  
  useEffect(() => {
      AOS.init();
  }, []);

  return (
    <>
      <section
        id="cover__landing"
        className="h-screen grid justify-items-center items-center"
      >
        <div className="text-center">
          <div className="text-center">
            <h1 className="text-white text-3xl mb-3">UNDANGAN PERNIKAHAN</h1>
            <h1 className="text-cyan-200 text-5xl font_autumn"><Typewriter text="Zanah" delay={400}/></h1>
            <h1 className="text-cyan-200 text-5xl font_autumn mt-4">&</h1>
            <h1 className="text-cyan-200 text-5xl font_autumn"><Typewriter text="Adam" delay={300}/></h1>
          </div>
          <div className="grid justify-items-center items-center my-3">
            <h1 className="text-white">Akan Dilaksanakan Pada Tanggal:</h1>
            <div className="grid grid-flow-col gap-3 text-center auto-cols-max text-white">
            <span className="material-icons text-2xl">calendar_month</span>
            <span className="text-2xl">3 Maret 2024</span>
            </div>
          </div>
          <div className="grid justify-items-center items-center mx-2 mt-6">
            <div className="block rounded-lg sm-w-11/12 max-w-11/12 px-5 bg-transparent border border-neutral-400 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                    <div className="sm-w-11/12 max-w-11/12 border-b-2 border-neutral-100 px-1 py-1 dark:border-neutral-600 text-neutral-300">
                    Turut Mengundang Bapak/Ibu/Saudara/i
                    </div>
                    <div className="max-w-11/12 sm-w-11/12 p-3">
                        <h5 className=" mb-2 max-w-11/12 text-xl break-words font-medium leading-tight text-neutral-50">
                        {nama ? nama.replace(/_/g, ' ') : "di tempat"}
                        </h5>
                    
                    </div>
                </div>

            {/* <h1>Turut Mengundang Bapak/Ibu/Saudara/i</h1>
            <div>
              <p>{nama ? nama : "Saudara/i"}</p>
            </div> */}
          </div>
          <div data-aos="flip-right" data-aos-offset="100" data-aos-duration="1000"
       data-aos-easing="ease-in-out" data-aos-once="true" >
          <Link to="/undangan">
            <button className="bg-sky-50 mt-3 hover:bg-blue-500 text-pink-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Buka Undangan
            </button>
          </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cover;

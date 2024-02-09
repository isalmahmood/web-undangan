import React, { useEffect, useRef, useState } from "react";
// import Swal from 'react-sweetalert2';
// import AOS from 'aos';
import Typewriter from "../animation-type/Typewriter";
import 'aos/dist/aos.css';
import imgBismillah from "../../assets/images/kaligrafi-bismillah-png-transparent-png-removebg-preview-300x118.png"

const HeroSection = () => {
  const [swalProps, setSwalProps] = useState({});

  useEffect(() => {
    // alert('asdasd')
      // AOS.init();
    setSwalProps({
        show: true,
        // title: "<strong>HTML <u>example</u></strong>",
        width:'100vw',
        height:'100vh',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Buka Undangan',
        html: `
          <div style={{width:"100vw", height: "100vh"}}> asd</div>
        `,
    });
    
  }, []);

  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  const [timerSeconds, setTimerSeconds] = useState('00')
  const [acaraSelesai, setAcaraSelesai] = useState(false)
  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Mar 3, 2024 12:00:00").getTime();

    interval = setInterval(function () {
        // Untuk mendapatkan tanggal dan waktu hari ini
        let now = new Date().getTime();
        // Temukan jarak antara sekarang dan tanggal hitung mundur
        let distance = countDownDate - now;

        // Perhitungan waktu untuk hari, jam, menit dan detik
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor( (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Jika hitungan mundur selesai, tulis beberapa teks
        if (distance < 0) {
          //stop timer
          clearInterval(interval.current)
          // console.log('acara sudah berlangsung')
          setAcaraSelesai(true)
        } else {
            setTimerDays(days)
            setTimerHours(hours)
            setTimerMinutes(minutes)
            setTimerSeconds(seconds)
        }
      }, 1000);
  }

  useEffect(() => {
    // Memperbarui hitungan mundur setiap 1 detik
      startTimer();
      return () => { 
          clearInterval(interval.current)
      }
  }, []);
      

    return(
        <>
        {/* <Swal {...swalProps} /> */}
<section id="heroSection" className="mt-5 overflow-hidden">
  
        <img 
        src={imgBismillah}
        loading="lazy"
        className="mx-auto mb-10"
        style={{ marginTop: "-20px" }}
        width={200}
        height={50}
        />

        <h1 className="text-4xl text-center font-semibold text-slate-950 font_caviar_dreams mb-5">Acara Pernikahan</h1>
        <div className="md:grid md:grid-cols-2 md:gap-2 ">
          <div>
          <div className="grid justify-items-center items-center">
            <h1 className="text-2xl text-center text-cyan-800 font_autumn">Nurzanah Puspitasari</h1>
            <h1 className="text-2xl text-center text-cyan-800 font_autumn">&</h1>
            <h1 className="text-2xl text-center text-cyan-800 font_autumn mt-2">Adam Arya Soleh, S.Kom</h1>

            <h1 className="text-slate-950 mt-4">Menuju Resepsi Pernikahan Dalam Waktu:</h1>
            {!acaraSelesai ? 
              <div className="grid grid-flow-col gap-4 text-center auto-cols-max mt-2 mb-8">
                <div data-aos="flip-right" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-delay="500">
                  <div className="flex flex-col items-center p-3 px-4 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-xl rounded-box text-slate-950">
                    {/* <span className="countdown font-mono text-3xl"> */}
                    <span className=" font-mono text-2xl">
                      {/* <span style={{ "--value": 15 }}></span> */}
                      <span>{timerDays}</span>
                    </span>
                    Hari
                  </div>
                </div>
                <div data-aos="flip-right" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-delay="1000">
                  <div className="flex flex-col items-center p-3 px-4 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-xl rounded-box text-slate-950">
                    {/* <span className="countdown font-mono text-3xl"> */}
                    <span className=" font-mono text-2xl">
                      {/* <span style={{ "--value": 10 }}></span> */}
                      <span>{timerHours}</span>
                    </span>
                    Jam
                  </div>
                </div>
                <div data-aos="flip-right" data-aos-offset="100" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-delay="1500">
                  <div className="flex flex-col items-center p-3 bg-gradient-to-r from-cyan-400 to-blue-400 shadow-xl rounded-box text-slate-950">
                    {/* <span className="countdown font-mono text-3xl"> */}
                    <span className=" font-mono text-2xl">
                      {/* <span style={{ "--value": 24 }}></span> */}
                      <span>{timerMinutes}</span>
                    </span>
                    Menit
                  </div>
                </div>
                {/* <div className="flex flex-col items-center p-3 px-4 bg-pink-50 shadow rounded-box text-slate-950"> */}
                  {/* <span className="countdown font-mono text-3xl"> */}
                  {/* <span className=" font-mono text-2xl"> */}
                    {/* <span style={{ "--value": 35 }}></span> */}
                    {/* <span >{timerSeconds}</span> */}
                  {/* </span> */}
                  {/* Detik */}
                {/* </div> */}
              </div> : <h1 className="text-slate-950 text-2xl">Acara Sudah Berlangsung</h1> }
            </div>
            
          </div>
          <div className="grid justify-items-center items-center mt-0 mb-8 p-3">
            {/* <div className="flex flex-col space-y-8"> */}
            <p className="text-center tracking-normal ayat font-semibold font_isep_misbah text-2xl mb-3 text-slate-950 ">
            <Typewriter text="وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ" delay={10}/></p>
            {/* </div> */}
            <p className="text-justify text-slate-950" data-aos-once="true" data-aos="fade-right">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari 
            jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir." (QS. Ar Rum ayat 21)
            </p> 
            <h1 className="text-justify mt-5 text-slate-950" data-aos-once="true" data-aos="fade-left">
              Dengan memohon Rahmat dan Ridho Allah SWT kami bermaksud menyelenggarakan acara Pernikahan putra putri kami pada tanggal <b>Minggu, 3 Maret 2024</b>.
              Semoga Allah memberkahi putra-putri kami untuk menyempurnakan ibadah mereka dalam membentuk keluarga yang sakinah, mawadah, wa rahmah.
              <br/><p className="">Suatu kehormatan dan kebahagiaan
              bagi kami apabila Bapak/lbu/Saudara/i berkenan hadir untuk memberikan do'a restu.</p>
            </h1>
          </div> 
        </div>

        <div
       data-aos="fade-down" data-aos-offset="100" data-aos-duration="1000"
       data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay="100"//Here you can use any of the AOS animations
    >
       
        </div>
        
        </section>
        </>
    )
}

export default HeroSection
import React from "react";
import iconClock from '../../assets/icons-svg/clock-icon.svg'
import iconCalenderClock from '../../assets/icons-svg/icon-calender-clock.svg'

const InfoAcara = () => {
    return(
        <>
        <section id="lokasi" className="mb-10 p-2" style={{ marginBottom: "100px" }}>
            <h1 className="text-5xl text-center font-semibold text-slate-950 mt-0 font_olivia_reguler[hide] font_caviar_dreams">Informasi Acara</h1>
            <div className="grid justify-items-center items-center mt-5">
                <h1 className="text-center text-slate-950">Resepsi dilakasanakan di :</h1>
                <h1 className="text-center text-slate-950 text-2xl">Jl. Kapitan Rt.14/Rw.04, Klender, Duren Sawit, Jakarta Timur</h1>
                <iframe className="w-full max-w-6xl pb-3 pt-2 mx-auto"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.722525750378!2d106.89601443221713!3d-6.215997658447724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f359b3d94a7b%3A0xe43169263f6e29b1!2sJl.%20Kp.%20Kapitan%20No.15%2C%20RT.9%2FRW.4%2C%20Klender%2C%20Kec.%20Duren%20Sawit%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013470!5e0!3m2!1sen!2sid!4v1706347001800!5m2!1sen!2sid" 
                 height="450"
                  loading="lazy" referrerPolicy={"no-referrer-when-downgrade"}></iframe>
                <a href="https://maps.app.goo.gl/uMrM6YefCJyn95FC6" target="_blank">
                    <button className="bg-indigo-500  text-white shadow-xl  p-2 px-5 rounded-lg">
                        <span className="material-icons text-1xl">location_on</span>
                        <span className="text-xl">Buka Map</span>
                    </button>
                </a>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-2  mt-5">
                <div className="grid justify-items-center items-center mt-5">
                    <table className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black  text-center shadow-xl rounded-2xl w-11/12">
                        <thead></thead>
                        <tbody>
                        <tr className="">
                            <td colSpan={2} className="p-2 border-b-2 text-2xl ">AKAD NIKAH</td>
                        </tr>
                        <tr >
                            <td className="pt-3 w-1/2"><img className="mx-auto" src={iconClock} alt="clock" /></td>
                            <td className="pt-3 w-1/2"><img className="mx-auto" src={iconCalenderClock} alt="clock" /></td> 
                        </tr>
                        <tr>
                            <td className="p-2 pb-5">10:00 - 11:00 WIB</td>
                            <td className="p-2 pb-5">Minggu, 3 Maret 2024</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="grid justify-items-center items-center mt-5">
                    <table className="bg-gradient-to-r from-cyan-400 to-blue-400 text-black text-center shadow-xl rounded-2xl w-11/12">
                        <thead></thead>
                        <tbody>
                        <tr className="">
                            <td colSpan={2} className="p-2 border-b-2 text-2xl">RESEPSI</td>
                        </tr>
                        <tr>
                            <td className="pt-3 w-1/2"><img className="mx-auto" src={iconClock} alt="clock" /></td>
                            <td className="pt-3 w-1/2"><img className="mx-auto" src={iconCalenderClock} alt="clock" /></td> 
                        </tr>
                        <tr>
                            <td className="p-2 pb-5">12:00 - Selesai</td>
                            <td className="p-2 pb-5">Minggu, 3 Maret 2024</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
        </>
    )
}

export default InfoAcara
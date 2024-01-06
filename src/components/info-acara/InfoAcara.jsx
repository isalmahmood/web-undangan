import React from "react";
import iconClock from '../../assets/icons-svg/clock-icon.svg'
import iconCalenderClock from '../../assets/icons-svg/icon-calender-clock.svg'

const InfoAcara = () => {
    return(
        <>
        <section id="lokasi" className="mb-10 p-2" style={{ marginBottom: "100px" }}>
            <h1 className="text-5xl text-center font-semibold text-slate-950 font_olivia_reguler mt-10">Informasi Acara</h1>
            <div className="grid justify-items-center items-center mt-5">
                <h1 className="text-center text-slate-950">Resepsi dilakasanakan di :</h1>
                <h1 className="text-center text-slate-950 text-2xl">Jl. lorem ipsum, Kel. ipsum, Kec. dolor, Jakarta Timur</h1>
                <iframe className="w-full max-w-6xl pb-3 pt-2 mx-auto"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.706890943746!2d106.8283528737793!3d-6.169988260461718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5ce6cc278b3%3A0x92a90690b871304d!2sIstiqlal%20Mosque%2C%20Pasar%20Baru%2C%20Sawah%20Besar%2C%20Central%20Jakarta%20City%2C%20Jakarta%2010710!5e0!3m2!1sen!2sid!4v1703939061094!5m2!1sen!2sid" 
                 height="450"
                  loading="lazy" referrerPolicy={"no-referrer-when-downgrade"}></iframe>
                <a href="https://maps.app.goo.gl/6ZXrb1zRNL6YuwFV6" target="_blank">
                    <button className="bg-sky-700 text-white shadow-xl  p-2 px-5 rounded-lg">
                        <span className="material-icons text-1xl">location_on</span>
                        <span className="text-xl">Buka Map</span>
                    </button>
                </a>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-2  mt-5">
                <div className="grid justify-items-center items-center mt-5">
                    <table className="bg-slate-800 text-white  text-center shadow-xl rounded-2xl w-11/12">
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
                            <td className="p-2 pb-5">00:00 - Selesai</td>
                            <td className="p-2 pb-5">Ahad, 35 Januari 2024</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="grid justify-items-center items-center mt-5">
                    <table className="bg-slate-800 text-white text-center shadow-xl rounded-2xl w-11/12">
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
                            <td className="p-2 pb-5">00:00 - Selesai</td>
                            <td className="p-2 pb-5">Ahad, 35 Januari 2024</td>
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
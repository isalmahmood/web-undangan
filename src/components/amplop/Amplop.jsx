import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoBca from "../../assets/images/Bank_Central_Asia.png";
import logoBsi from "../../assets/images/Bank_Syariah_Indonesia.png";

const Amplop = () => {

function getRekening1(){
    let rekening1 = document.getElementById('rekening1');

    rekening1.select();
    rekening1.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(rekening1.value);

    toast.success(`BCA - ${rekening1.value}`, {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

function getRekening2(){
    let rekening2 = document.getElementById('rekening2');

    rekening2.select();
    rekening2.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(rekening2.value);

    toast.success(`BSI - ${rekening2.value}`, {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
}

    return(
        <>
        <ToastContainer/>
        <section id="amplop" style={{ marginBottom: "100px" }}>
        <h1 className="text-5xl text-center font-semibold text-slate-950 font_olivia_reguler[hide] mt-10 font_caviar_dreams">Gift</h1>
            <div className="md:grid md:grid-cols-2 md:gap-2  mt-5">
                    <div className="grid justify-items-center items-center mt-5">
                        <table className="bg-slate-0 text-slate-900  text-center shadow-xl rounded-2xl w-11/12">
                            <thead></thead>
                            <tbody>
                            <tr className="">
                                <td className="p-2 border-b-2 text-2xl ">
                                    <img width={100} height={100} className="mx-auto" src={logoBca} alt="rekening1" />
                                    </td>
                            </tr>
                            <tr>
                                <td className="pt-3">Bank BCA - A/N Adam Arya Soleh</td>
                            </tr>
                            <tr>
                                <td className="p-2 pb-5">
                                        <div className="flex">
                                            <div className="relative w-full">
                                            <input
                                                type="text"
                                                id="rekening1"
                                                className="block text-2xl p-2.5 w-full z-20 text-center text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-0  border-gray-0 focus:ring-blue-0 focus:border-blue-0 dark:border-gray-0 dark:focus:border-blue-0"
                                                value={'2740231556'}
                                                readOnly="readonly"
                                                disabled
                                            />
                                                <label
                                                    htmlFor="rekening1"
                                                    className=" text-sm absolute pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0]  pt-[-0.37rem] leading-[.2] text-slate-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:text-primary"
                                                >
                                                    No Rekening
                                                </label>
                                            <button
                                                type="button"
                                                onClick={getRekening1}
                                                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                <span>COPY!</span>
                                            </button>
                                            </div>
                                        </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="grid justify-items-center items-center mt-5">
                        <table className="bg-slate-0 text-slate-900 text-center shadow-xl rounded-2xl w-11/12">
                        <thead></thead>
                            <tbody>
                            <tr className="">
                                <td className="p-2 border-b-2 text-2xl ">
                                    <img width={130} height={130} className="mx-auto" src={logoBsi} alt="rekening2" />
                                    </td>
                            </tr>
                            <tr>
                                <td className="pt-3">Bank BSI - A/N Nurzanah Puspitasari</td>
                            </tr>
                            <tr>
                                <td className="p-2 pb-5">
                                        <div className="flex">
                                            <div className="relative w-full">
                                            <input
                                                type="text"
                                                id="rekening2"
                                                className="block text-2xl p-2.5 w-full z-20 text-center text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-0  border-gray-0 focus:ring-blue-0 focus:border-blue-0 dark:border-gray-0 dark:focus:border-blue-0"
                                                value={'7243600717'}
                                                readOnly="readonly"
                                                disabled
                                            />
                                            <label
                                                    htmlFor="rekening2"
                                                    className="text-sm absolute pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] pt-[-0.37rem] leading-[.2] text-slate-400 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none peer-focus:text-primary"
                                                >
                                                    No Rekening
                                                </label>
                                            <button
                                                type="button"
                                                onClick={getRekening2}
                                                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            > 
                                                <span>COPY!</span>
                                            </button>
                                            </div>
                                        </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Amplop
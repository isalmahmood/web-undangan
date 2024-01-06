import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import axios from "axios";
import Swal from "react-sweetalert2";
import localization from 'moment/locale/id'

const Komentar = () => {
    const [key, setkey] = useState('');
    const [swalSucces, setSwalSucces] = useState({});
    // const [getDate, setGetDate] = useState('');
    let interval = useRef();
    const [data, setData] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    moment.updateLocale('id', localization);
    // moment.locale('id')
    // console.log(moment().format('LL'));
    

    const getCharacter = (event) => {
        setkey(event.target.value)
    }

    const fetchData = async () => {
        if (fetchStatus === true) {
            axios
            .get("https://sheet.best/api/sheets/cfadb6e3-647a-4a9b-9027-22ce70fda2ca")
            .then((res) => {
                setData(res.data);
                // console.log(res.data.sort((a, b) => (b.Tanggal - a.Tanggal)))
              
            })
            .catch((error) => {
                console.log(error)
            });
            setFetchStatus(false);
        }
    };

    useEffect(() => {
        
        fetchData()
    }, [fetchStatus, setFetchStatus]);

   

    
    // console.log(sort)
    // setFetchStatus(true)
    

    // const startTimer = () => {
    //     interval = setInterval(function () {
    //         let getTime = moment(Date()).format('DD/MM/YYYY H:m:ss')
            
    //         setGetDate(getTime)
            
    //     }, 1000);
    // }

    // useEffect(() => {
    //     // Memperbarui hitungan mundur setiap 1 detik
    //     startTimer();
    //     return () => { 
    //         clearInterval(interval.current)
    //     }
    // }, [getDate, setGetDate]);

    //submit ucapan
    const [input, setInput] = useState({
        nama: "",
        ucapan: ""
    })

    const handleChangeInput = (e) => {
        let {value, name} = e.target;

        setInput({...input, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoadingSubmit(true)
        let getTime = moment(Date()).format('DD/MM/YYYY HH:mm:ss')

        let { nama, ucapan} = input 
        
        console.log(input)
        axios.post("https://sheet.best/api/sheets/cfadb6e3-647a-4a9b-9027-22ce70fda2ca", {
            Tanggal: getTime,
            Nama: nama,
            Ucapan: ucapan,
          })
          .then((response) => {
            console.log(response);
            fetchData()
            setFetchStatus(true);
            setSwalSucces({
                show: true,
                icon: 'success',
                title: 'Pesan Terkirim',
                text: 'Terima Kasih Atas Doanya',
                showConfirmButton: true,
                // timer: 1500
            });
            setShowForm(false)
            document.getElementById('nama').value = '';
            document.getElementById('komen').value = '';
            
          })
          .catch((error) => {
            // Swal.fire({
            //   icon: "error",
            //   title: "Oops...",
            //   text: "Username atau Password salah!",
            // });
          })
        
        }
      

    return(
        <>
        {fetchStatus ==false && <Swal {...swalSucces} /> }
        <h1 className="text-5xl text-center font-semibold text-slate-950 font_olivia_reguler mt-10 ">Doa & Restu</h1>
        <section className="relative  min-h-80 max-h-80 antialiased bg-transparent min-w-screen p-3 overflow-auto">
            <div className="container px-0 mx-auto sm:px-5">
                {data !== null && fetchStatus == false &&
                data.sort((a, b) => (b.idUcapan - a.idUcapan)).map((res, index) => {
                    return (
                    <div key={index} className="flex-col w-full py-4 mx-auto shadow-xl mt-3 bg-sky-100 border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm ">
                    <div className="flex flex-row md-10">
                        <div className="flex-col mt-1">
                        <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                            {res.Nama} 
                            <span className="ml-2 text-xs font-normal text-gray-500">
                            • { moment(res.Tanggal, "DD-MM-YYYY H:m:s").fromNow()}
                            </span>
                        </div>
                        <div className="flex-1 px-3 ml-2 text-sm font-medium leading-loose text-gray-600">
                            {res.Ucapan}
                        </div>
                        
                        </div>
                    </div>
                    </div>
                    );
                })} 

                {data == '' && 
                   <div className="flex-col w-full py-4 mx-auto shadow-xl mt-3 bg-sky-100 border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm ">
                   <div className="flex flex-row md-10">
                       <div className="flex-col mt-1">
                       <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                           Teman Kecil
                           <span className="ml-2 text-xs font-normal text-gray-500">
                           • 
                           </span>
                       </div>
                       <div className="flex-1 px-3 ml-2 text-sm font-medium leading-loose text-gray-600">
                           Sakinah Mawadah wa Rohmah
                       </div>
                       
                       </div>
                   </div>
                   </div>
                }
               
            </div>
        </section>

          {/* comment form */}
        {showForm &&
          <section className="">
            <h1 className="text-center mt-10 text-3xl font-semibold text-slate-950 font_olivia_reguler">Ketik Do'a Untuk Mempelai</h1>
              <div className="flex mx-auto items-center justify-center mt-2 mx-8 mb-4 max-w-l">
                <form onSubmit={handleSubmit} className="w-full max-w-11/12 bg-white rounded-lg px-4 pt-2">
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">
                      Add a new comment
                    </h2>
                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                      <label htmlFor="nama" className="text-gray-500">Nama</label>
                      <input 
                          onChange={handleChangeInput} name="nama" required 
                          className="focus:border-sky-500 shadow bg-white appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Ketik Nama Anda..." maxLength={20}/>
                      </div>
                    <div className="w-full md:w-full px-3 mb-2 mt-2">
                    <label htmlFor="ucapan" className="text-gray-500">Ucapan</label>
                      <textarea
                        id="komen"
                        className="focus:border-sky-500 bg-gray-100 text-gray-700 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium  focus:outline-none focus:bg-white"
                        name="ucapan"
                        placeholder="Ketik Ucapan Untuk Mempelai..."
                        required
                        onChange={handleChangeInput}
                        onKeyUp={getCharacter}
                        maxLength={200}
                      ></textarea>
                      <span>{key ? key.length : 0} / maksimal 200 karakter</span>
                    </div>
                    <div className="w-full md:w-full flex items-start md:w-full px-3">
                      <div className="-mr-1">
                      {!loadingSubmit &&
                        <button 
                          type="submit"
                          className={`shadow inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white 
                          transition duration-150 ease-in-out bg-indigo-500 rounded-md shadow cursor hover:bg-indigo-400
                          `} 
                        >Kirim Ucapan</button>
                      }
                      {loadingSubmit &&
                        <div className={`flex items-center justify-center`}>
                              <button
                                type="button"
                                className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 rounded-md shadow cursor-not-allowed hover:bg-indigo-400"
                                disabled=""
                              >
                                <svg
                                  className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx={12}
                                    cy={12}
                                    r={10}
                                    stroke="currentColor"
                                    strokeWidth={4}
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Loading...
                              </button>
                            </div>
                          }
                      </div>
                      <div></div>
                    </div>
                  </div>
                </form>
              </div>
          </section>
        }

        </>
    )
}

export default Komentar
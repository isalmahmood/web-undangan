
import './App.css';
import Swal from 'react-sweetalert2';
import React, { useEffect, useState } from "react";
import Routers from './routes/Routers';

function App() {
  const [swalProps, setSwalProps] = useState({});

  useEffect(() => {
    // alert('asdasd')
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

  return (
    <>
    <Routers/>
    </>
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   <Swal {...swalProps} />
    // </div>
  );
}

export default App;

import React from "react";
// import imgMempelaiPria from "../../assets/images/avatar-pengantin-pria.jpg"
import imgMempelaiPria from "../../assets/images/img-adam.jpg"
// import imgMempelaiWanita from "../../assets/images/avatar-pengantin-wanita.jpg"
import imgMempelaiWanita from "../../assets/images/img-zanah.jpg"

const Mempelai = () => {
    return(
        <>
        <section id="mempelai" className="mb-8">
        <h1 className="text-5xl text-center font-semibold text-slate-950 mt-10 font_olivia_reguler[hide] font_caviar_dreams">Mempelai</h1>
        <div className="md:grid md:grid-cols-2 md:gap-2">
          <div className="p-5">
            <h1 className="text-cyan-900 text-right text-2xl my-2 font_caviar_dreams">Nurzanah Puspitasari</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 text-right mt-2 text-slate-950">
                    <h1>Putri pertama dari:</h1>
                        <h1>Bapak <b>Nurfajari</b></h1>
                        <h1>dan</h1>
                        <h1>Ibu <b>Rochanah</b></h1>
                    </div>
                    <div className="..."><img src={imgMempelaiWanita} className="rounded-full shadow-2xl border-4" alt="img-mempelai-pria" loading="lazy" /></div>
                </div>
          </div>
          <div className="p-5 mb-10">
            <h1 className="text-cyan-900 text-left text-2xl my-2 font_caviar_dreams">Adam Arya Soleh, S.Kom</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="">
                        <img src={imgMempelaiPria} className="rounded-full shadow-2xl border-4" alt="img-mempelai-wanita" loading="lazy" />
                    </div>
                    <div className="col-span-2 text-left mt-2 text-slate-950">
                    <h1>Putra Kedua dari:</h1>
                        <h1>Bapak <b>Abdullah</b></h1>
                        <h1>dan</h1>
                        <h1>Ibu <b>Dami</b></h1>
                    </div>
                </div>
          </div>
        </div>
        </section>
        </>
    )
}

export default Mempelai
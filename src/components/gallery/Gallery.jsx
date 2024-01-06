import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from "flowbite-react";


const Gallery = () => {
    return(
        <>
        <section id="gallery" className="mt-10">
        <h1 className="text-5xl text-center font-semibold text-slate-950 font_olivia_reguler mt-10 ">Gallery</h1>

        <div className="h-96 sm:h-64 xl:h-96 2xl:h-96 md:h-96 md:px-10 mt-5">
            <Carousel slide={true} className="shadow-xl">
                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" loading="lazy" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" loading="lazy" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" loading="lazy" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" loading="lazy" alt="..." />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" loading="lazy" alt="..." />
            </Carousel>
        </div>


        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
            <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
                <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
                    <div className="w-full lg:w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                        src="https://www.tailwindtap.com/assets/components/gallery/image1.jpg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                        src="https://www.tailwindtap.com/assets/components/gallery/image2.jpg"
                        />
                    </div>
                    <div data-aos="flip-right" data-aos-offset="100" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-once="false" data-aos-delay="200">
                        <div className="w-full p-1 md:p-2">
                            <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
                            src="https://www.tailwindtap.com/assets/components/gallery/image7.jpg"
                            />
                        </div>
                    </div>   
                </div>
                <div className="flex w-full sm:w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                        
                            alt="gallery"
                            className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                            src="https://www.tailwindtap.com/assets/components/gallery/image9.jpg"
                            />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                        src="https://www.tailwindtap.com/assets/components/gallery/image4.jpg"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                        alt="gallery"
                        className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
                        src="https://www.tailwindtap.com/assets/components/gallery/image6.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>

            <div className="w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 space-y-5">
                <img src="https://cdn5.vectorstock.com/i/1000x1000/85/59/black-silhouette-couple-in-love-is-sitting-vector-28928559.jpg" alt="image" />
                <img src="https://cdn5.vectorstock.com/i/1000x1000/85/59/black-silhouette-couple-in-love-is-sitting-vector-28928559.jpg" alt="image" />
                <img src="https://cdn5.vectorstock.com/i/1000x1000/85/59/black-silhouette-couple-in-love-is-sitting-vector-28928559.jpg" alt="image" />
                <img src="https://cdn5.vectorstock.com/i/1000x1000/85/59/black-silhouette-couple-in-love-is-sitting-vector-28928559.jpg" alt="image" />
                <img src="https://cdn5.vectorstock.com/i/1000x1000/85/59/black-silhouette-couple-in-love-is-sitting-vector-28928559.jpg" alt="image" />
                <img src="https://cdn5.vectorstock.com/i/1000x1000/85/59/black-silhouette-couple-in-love-is-sitting-vector-28928559.jpg" alt="image" />
            </div>
        </section>
        </>
    )
}

export default Gallery
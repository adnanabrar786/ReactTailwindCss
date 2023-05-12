import React from 'react';
import banner_pic from "../assets/banner_pic.jpg";

import { ImFacebook } from 'react-icons/im';
import { SiTwitter } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const Banner = () => {
    return (
        <>
            {/* <div
                className="
                grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 
                bg-gradient-to-r from-[#4489bb]  to-[#203f9a] 
                px-2 py-12"
            >
                <div className='h-auto flex flex-col items-center justify-center'>
                    <h1 className='text-white'>
                        Hello !
                    </h1>
                    <p className='text-white w-3/4 pt-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='text-white flex justify-between w-2/5 pt-6'>
                        <span>f</span>
                        <span>i</span>
                        <span>l</span>
                        <span>in</span>
                    </div>
                </div>
                <div className='h-auto flex justify-center'>
                    <img src={banner_pic} alt="img" />
                </div>
            </div> */}

            <div
                className=" 
                bg-gradient-to-r from-[#4489bb]  to-[#203f9a] 
                flex flex-col py-12 px-6
                2xl:flex-row
                xl:flex-row
                lg:flex-row
                md:flex-row
                sm:flex-col items-center  
                "
            >
                <div className='h-auto flex flex-col items-center justify-center 
                w-full
                2xl:w-1/2 
                xl:w-1/2
                lg:w-1/2
                md:w-1/2 
                sm:w-full
                '
                >
                    <h1 className='text-white
                     w-full
                     2xl:w-3/4 
                     xl:w-3/4 
                     lg:w-3/4 
                     md:w-3/4 
                     sm:w-full
                     '>
                        Hello !
                    </h1>
                    <p className='text-white 
                    pt-6
                    w-full
                    2xl:w-3/4 
                    xl:w-3/4 
                    lg:w-3/4 
                    md:w-3/4 
                    sm:w-full
                    '>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='text-white flex justify-start 
                      pt-6
                      w-full
                      2xl:w-3/4 
                      xl:w-3/4 
                      lg:w-3/4 
                      md:w-3/4 
                      sm:w-full
                      '>
                        <span className='text-md border text-white rounded-full p-2 cursor-pointer mx-2'>
                            <ImFacebook />
                        </span>
                        <span className='text-md border text-white rounded-full p-2 cursor-pointer mx-2'>
                            <SiTwitter />
                        </span>
                        <span className='text-md border text-white rounded-full p-2 cursor-pointer mx-2'>
                            <FaLinkedinIn />
                        </span>
                        <span className='text-md border text-white rounded-full p-2 cursor-pointer mx-2'>
                            <FiInstagram />
                        </span>
                        <span className='text-md border text-white rounded-full p-2 cursor-pointer mx-2'>
                            <SiWhatsapp />
                        </span>
                    </div>
                </div>
                <div className='h-auto flex justify-center w-1/2 mt-6
                  2xl:mt-0
                  xl:mt-0
                  lg:mt-0
                  md:mt-0
                  sm:mt-6
                  '>
                    <img src={banner_pic} alt="img" />
                </div>
            </div>
        </>
    )
}

export default Banner

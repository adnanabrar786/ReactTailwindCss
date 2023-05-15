import React from 'react'
import Banner from '../components/Banner'
import banner_pic from "../assets/banner_pic.jpg"

const Home = () => {
    return (
        <div>
            <Banner />
            {/* Project wrapper */}
            <div className='py-12 px-6'>
                <h1 className='flex justify-center text-4xl'>My Project</h1>

                {/* card */}
                <div className='flex flex-wrap w-full justify-around mt-20'>
                    {/* one */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg w-10/12 h-full mb-4
                       2xl:mt-0
                       xl:mt-0
                       lg:mt-0
                       md:w-5/12, mb-4
                       sm:w-10/12, mb-4
                       ">
                        <img className="w-full  h-80" src={banner_pic} alt="Sunset in the mountains" />
                        <p className='mt-8 pb-6 text-center'>This is my project</p>
                    </div>

                    {/* two */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg w-10/12 mb-4
                     2xl:mt-0
                     xl:mt-0
                     lg:mt-0
                     md:w-5/12, mb-4
                     sm:w-10/12, mb-4
                     ">
                        <img className="w-full h-80" src={banner_pic} alt="Sunset in the mountains" />
                        <p className='mt-8 pb-6 text-center'>This is my project</p>
                    </div>

                    {/* three */}
                    <div className="max-w-sm rounded overflow-hidden shadow-lg w-10/12 mb-4
                     2xl:mt-0
                     xl:mt-0
                     lg:mt-0
                     md:w-5/12, mb-4
                     sm:w-10/12, mb-4
                     ">
                        <img className="w-full h-80" src={banner_pic} alt="Sunset in the mountains" />
                        <p className='mt-8 pb-6 text-center'>This is my project</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Home

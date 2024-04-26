

import 'swiper/css/bundle';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className="relative p-2">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper lg:h-[500px] h-[240px] rounded-lg "
            >
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen  opacity-80 hero-overlay "
                        style={{
                            backgroundImage: "url('https://i.ibb.co/YdFyk1b/nature-mountain-displays-radiant-colors-sunset-generative-ai.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4  text-xl bg-gradient-to-r from-pink-600 via-blue-900 to-blue-500 text-transparent bg-clip-text animate-gradient'>Live the high life in this breathtaking penthouse with panoramic city views.</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-85"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/9p3S7z0/natures-beauty-captured-tranquil-mountain-landscape-generative-ai.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl '>Luxury Pool Villa Spectacular Contemporary.</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-85"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/YdFyk1b/nature-mountain-displays-radiant-colors-sunset-generative-ai.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl '>The difference between a resort and villa is a resort has everything.</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="bg-cover bg-center bg-no-repeat h-screen bg-sky-700 opacity-80"
                        style={{
                            backgroundImage: "url('https://i.ibb.co/p4H5ZgD/winter-forest-background-blue-watercolor-holiday-design.jpg')",
                        }}
                    >
                        <div className='flex flex-col justify-center items-center lg:p-[200px] p-9 lg:w-2/2 mx-auto'>
                            <h1 className='lg:text-5xl text-center font-bold  mb-4 text-black text-xl'>A penthouse is a unit or apartment on the highest floor of a building.</h1>
                            <button href="#_" className="relative inline-block px-4 py-2 font-medium group">
                                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                                <span className="relative text-black group-hover:text-white">Read More</span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
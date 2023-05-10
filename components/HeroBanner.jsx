import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';

function HeroBanner() {
    return (
        <div className='relative text-white text-[20px]'>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div onClick={clickHandler} className='absolute right-[31px] md:right-[51px]
                    bottom-[1px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center 
                    justify-center cursor-pointer hover:opacity-90' >
                        <BiArrowToLeft className='text-sm md:text-lg' />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div onClick={clickHandler} className='absolute right-0 
                    bottom-[1px] w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center 
                    justify-center cursor-pointer hover:opacity-90' >
                        <BiArrowToRight className='text-sm md:text-lg' />
                    </div>
                )}
            >
                <div>
                    <img src="/slide-1.png" className='aspect-[16/10] 
                    md:aspect-auto object-cover' alt='image' />
                    <div className='px-[15px] md:px-[40px] py-[10px] md-py-[25px] font-oswald 
                        bg-white absolute bottom-[25px] md:bottom[75px] left-0 text-black/[0.9]
                        text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                        Shop Now
                    </div>
                </div>
                <div>
                    <img src="/slide-2.png" className='aspect-[16/10] 
                    md:aspect-auto object-cover' alt='image' />
                    <div className='px-[15px] md:px-[40px] py-[10px] md-py-[25px] font-oswald 
                        bg-white absolute bottom-[25px] md:bottom[75px] left-0 text-black/[0.9]
                        text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                        Shop Now
                    </div>
                </div>
                <div>
                    <img src="/slide-3.png" className='aspect-[16/10] 
                    md:aspect-auto object-cover' alt='image' />
                    <div className='px-[15px] md:px-[40px] py-[10px] md-py-[25px] font-oswald 
                        bg-white absolute bottom-[25px] md:bottom[75px] left-0 text-black/[0.9]
                        text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90'>
                        Shop Now
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default HeroBanner;

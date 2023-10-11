import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import slider_img1 from '../../assets/Home/slider_img1.svg';
import slider_img2 from '../../assets/Home/slider_img2.jpg';
import slider_img3 from '../../assets/Home/slider_img3.jpg';
import { GrFormNextLink } from 'react-icons/gr';
import { GrFormPreviousLink } from 'react-icons/gr';

const MainSlider = () => {
    const [sliderCount,setSliderCount] = useState(0);
    const [currentSliderCount,setCurrentSliderCount] = useState(1);

    useEffect(() => {
        let count = document.querySelector('.slick-track')?.children?.length;
        setSliderCount(count);
    }, []);    

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: <GrFormNextLink />,
        prevArrow: <GrFormPreviousLink />,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSliderCount(newIndex + 1);
          },
    };

    return (
        <div className='main-slider'>
            <div className='position-relative' style={{ height: '100vh' }}>
                <Slider {...settings}>
                    <div className='slider-wrapper'>
                        <div className='slider-img'>
                            <img src={slider_img1} alt="slider-main-image" />
                        </div>
                        <div className='slider-content col-md-6'>
                            <h3>CFG ISTANBUL</h3>
                            <h1>METRO</h1>
                            <p>
                                Credibly leverage existing business experiences through
                                magnetic mindshare. Synergistically exploit
                                efficient partnerships world-class applications.
                            </p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M11.5 22.61C17.7132 22.61 22.75 17.5732 22.75 11.36C22.75 5.14684 17.7132 0.110046 11.5 0.110046C5.2868 0.110046 0.25 5.14684 0.25 11.36C0.25 17.5732 5.2868 22.61 11.5 22.61Z" fill="#171E2F"/>
                                    <path d="M11.5 15.9601C14.0405 15.9601 16.1 13.9006 16.1 11.3601C16.1 8.81956 14.0405 6.76007 11.5 6.76007C8.95951 6.76007 6.90002 8.81956 6.90002 11.3601C6.90002 13.9006 8.95951 15.9601 11.5 15.9601Z" stroke="white" stroke-width="0.2"/>
                                </svg>
                                <Link to="/">Take A Look</Link>
                            </div>
                        </div>
                    </div>
                    <div className='slider-wrapper'>
                        <div className='slider-img'>
                            <img src={slider_img2} alt="slider-main-image" />
                        </div>
                        <div className='slider-content col-md-6'>
                            <h3>CFG ISTANBUL</h3>
                            <h1>METRO</h1>
                            <p>
                                Credibly leverage existing business experiences through
                                magnetic mindshare. Synergistically exploit
                                efficient partnerships world-class applications.
                            </p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M11.5 22.61C17.7132 22.61 22.75 17.5732 22.75 11.36C22.75 5.14684 17.7132 0.110046 11.5 0.110046C5.2868 0.110046 0.25 5.14684 0.25 11.36C0.25 17.5732 5.2868 22.61 11.5 22.61Z" fill="#171E2F"/>
                                    <path d="M11.5 15.9601C14.0405 15.9601 16.1 13.9006 16.1 11.3601C16.1 8.81956 14.0405 6.76007 11.5 6.76007C8.95951 6.76007 6.90002 8.81956 6.90002 11.3601C6.90002 13.9006 8.95951 15.9601 11.5 15.9601Z" stroke="white" stroke-width="0.2"/>
                                </svg>
                                <Link to="/">Take A Look</Link>
                            </div>
                        </div>
                    </div>
                    <div className='slider-wrapper'>
                        <div className='slider-img'>
                            <img src={slider_img3} alt="slider-main-image" />
                        </div>
                        <div className='slider-content col-md-6'>
                            <h3>CFG ISTANBUL</h3>
                            <h1>METRO</h1>
                            <p>
                                Credibly leverage existing business experiences through
                                magnetic mindshare. Synergistically exploit
                                efficient partnerships world-class applications.
                            </p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M11.5 22.61C17.7132 22.61 22.75 17.5732 22.75 11.36C22.75 5.14684 17.7132 0.110046 11.5 0.110046C5.2868 0.110046 0.25 5.14684 0.25 11.36C0.25 17.5732 5.2868 22.61 11.5 22.61Z" fill="#171E2F"/>
                                    <path d="M11.5 15.9601C14.0405 15.9601 16.1 13.9006 16.1 11.3601C16.1 8.81956 14.0405 6.76007 11.5 6.76007C8.95951 6.76007 6.90002 8.81956 6.90002 11.3601C6.90002 13.9006 8.95951 15.9601 11.5 15.9601Z" stroke="white" stroke-width="0.2"/>
                                </svg>
                                <Link to="/">Take A Look</Link>
                            </div>
                        </div>
                    </div>
                </Slider>   
                <div className='slider-number-line'>
                    <span>{sliderCount < 10 ? `0${currentSliderCount}` : currentSliderCount}</span>
                    <section>
                        <div style={{ width: `calc(${(currentSliderCount / sliderCount) * 100}%)` }}></div>
                    </section>
                    <span>{sliderCount < 10 ? `0${sliderCount}` : sliderCount}</span>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;
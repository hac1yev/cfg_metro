import React from 'react';
import './Home.css';
import MainSlider from '../../components/Home/MainSlider';
import Statistics from '../../components/Home/Statistics';
import ProjectInfo from '../../components/Home/ProjectInfo';

const Home = () => {
    return (
        <div className='home-wrapper'>
            <MainSlider />
            <div className='position-relative w-100 statistics-project-wrapper'>
                <Statistics />
            </div>
            <ProjectInfo />
        </div>
    );
};

export default Home;
import React from 'react';
import cfg_map from '../../assets/Home/cfg-map.svg';
import cfg_station from '../../assets/Home/cfg-station.svg';
import cfg_railway from '../../assets/Home/cfg-railway.svg';
import cfg_time from '../../assets/Home/cfg-time.svg';
import ProjectInfo from './ProjectInfo';

const Statistics = () => {
    return (
        <div className='statistics-wrapper'>
            <div className="container statistics-container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className='statistics-info'>
                            <img src={cfg_map} alt="cfg-map" />
                            <p>
                                CFG Metro 5 ayrı ilçeyi
                                raylı sistem ile birbirine
                                bağlıyor.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='statistics-info'>
                            <img src={cfg_station} alt="cfg-station" />
                            <p>
                                CFG Metro 13.3 km ve 12
                                istasyondan oluşuyor.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='statistics-info'>
                            <img src={cfg_railway} alt="cfg-railway" />
                            <p>
                                CFG Metro Hattının
                                günlük 500.000 yolcu
                                taşıması bekleniyor.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className='statistics-info'>
                            <img src={cfg_time} alt="cfg-time" />
                            <p>
                                İkitelli Ataköy arası
                                mesafe 19 dakikaya
                                düşüyor.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
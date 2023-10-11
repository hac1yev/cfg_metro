import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isHomepage,setIsHomepage] = useState(true);

    const location = useLocation();
    const { pathname } = location;
    
    const changeNav = () => {
        if (pathname === '/' && window.scrollY <= window.innerHeight) {
          setIsHomepage(true);
        } else {
          setIsHomepage(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
      }, [pathname]);

    useEffect(() => {
        if (pathname === '/') {
            setIsHomepage(true);
        } else {
            setIsHomepage(false);
        }
    }, [pathname]);


    return (
        <div className={isHomepage ? 'home-header-wrapper' : 'header-wrapper'}>
            <div className='container header-container'>
                <Link to="/" className='metro-logo'>
                    <img src="https://png.pngtree.com/png-vector/20200921/ourmid/pngtree-red-and-black-logo-png-image_2348180.jpg" alt="logo" />
                </Link>
                <ul className='header-menu'>
                    <li className="menu-item">
                        <Link to="/">
                            Ana sayfa
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/guzergah">
                            Güzergah
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/">
                            Proje Bilgileri
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/">
                            Haberler
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/">
                            Teknik Dokümanlar
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="/">
                            İletişim
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
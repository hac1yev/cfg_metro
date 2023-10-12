import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [isHomepage,setIsHomepage] = useState(true);
    const [isMenuOpen,setIsMenuOpen] = useState(false);

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

    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };
    

    return (
        <div className={isHomepage ? 'home-header-wrapper' : 'header-wrapper'}>
            <div className='container header-container'>
                <Link to="/" className='metro-logo'>
                    <img src="https://www.hyhmetro.com.tr/img/logo.png" alt="logo" />
                </Link>
                <div className='hamburger-menu' onClick={handleOpenMenu}>
                    <RxHamburgerMenu />
                </div>
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
                <div className={!isMenuOpen ? 'mobile-menu' : 'mobile-menu open-mobile-menu'}>
                    <div className='mobile-menu-header'>
                        <Link to="/" className='metro-logo'>
                            <img src="https://www.hyhmetro.com.tr/img/logo.png" alt="logo" />
                        </Link>
                        <div className='close-menu' onClick={handleCloseMenu}>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <ul>
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
        </div>
    );
};

export default Header;
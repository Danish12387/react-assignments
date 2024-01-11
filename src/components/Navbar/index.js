import FBlogo from '../../facebook.png';
import './index.css';
import '../../css/uicons-regular-rounded.css';
import React, { useState, useEffect } from 'react';

function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={scrollPosition > 20 ? 'scroll-on' : ''}>
            <div className='left_div'>
                <img src={FBlogo} />
                <input type="search" placeholder='Search Facebook' />
            </div>
            <div className='middle_div'>
                <div className='home'>
                    <i className="fi fi-rr-home"></i>
                </div>
                <div className='home'>
                    <i className="fi fi-rr-play-alt"></i>
                </div>
                <div className='home'>
                    <i className="fi fi-rr-users-alt"></i>
                </div>
            </div>
            <div className='right_div'>
                <div className='menu'>
                    <i class="fi fi-rr-grid"></i>
                </div>
                <div className='menu'>
                    <img src='https://iconape.com/wp-content/png_logo_vector/facebook-messenger.png' />
                </div>
                <div className='menu'>
                    <i class="fi fi-rr-bell"></i>
                </div>
                <img src='https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png' className='menu' />
            </div>
        </nav>
    )
}

export default Navbar;
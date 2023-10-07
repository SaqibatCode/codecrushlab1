import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from '../partials/popup'

import Logo from '../Assets/Logo.png'

function Header() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className='header'>
            <nav>
                <div className='container'>
                    <Link to='/'><img src={Logo} alt="" /></Link>
                </div>
                <div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Servers'>Servers</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><button onClick={togglePopup}>Get Quote</button></li>
                    </ul>
                </div>
            </nav>
            {isPopupOpen && <Popup />}
        </div>
    )
}

export default Header

import React, { useState } from 'react'

function popup() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className='popupContainer'>
            <div className="popContainer">
                <h2>Let's Connect</h2>
                button
                <p>Fill the form and our team will contact you shortly!</p>
                <input type="text" placeholder='Enter Your Email Address' />
                <input type="text" placeholder='Enter Your Contact Number' />
                <select name="reason" id="reason">
                    <option value="0">Select Relevant Department</option>
                    <option value="1">Education Department (YouTube)</option>
                    <option value="2">Education Department (Training)</option>
                    <option value="3">Regarding Services (Web Dev, Marketing)</option>
                </select>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default popup

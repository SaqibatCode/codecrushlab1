import React from 'react'
import '../styles.css'

import Searchbox from '../partials/Searchbox'
import Populartags from '../partials/populartags'

import HeroImage from '../Assets/heroImage.png'

function HeroPage() {
    return (
        <main>
            <div>
                <h1>Manage all of your codes in one place</h1>
                <p>From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p>
                <Searchbox />
                <Populartags />
            </div>
            <div>
                <img src={HeroImage} alt="" />
            </div>
        </main>
    )
}

export default HeroPage

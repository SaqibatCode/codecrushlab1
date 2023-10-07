import React from 'react'

import searchIcon from '../Assets/search.png'

function Searchbox() {
    return (
        <div className='searchBox'>
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search Article' />
            <button className='searchBtn'>Search</button>
        </div>
    )
}

export default Searchbox

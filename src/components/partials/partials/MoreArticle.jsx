import React from 'react'
import { Link } from 'react-router-dom'

function MoreArticle() {
    return (
        <div>
            <Link to='/blog' className='MoreArticle'>More Article</Link>
        </div>
    )
}

export default MoreArticle

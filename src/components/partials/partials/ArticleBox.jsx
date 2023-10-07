import React from 'react'

import blogDemo from '../Assets/Overlay.svg'
import Avatar from '../Assets/Avatar.svg'

function ArticleBox() {
    return (
        <div>
            <div className="articleboxContainer">
                <div className="articleContainerImage">
                    <img src={blogDemo} alt="" />
                </div>
                <div className="articleContainerDescription">
                    <h2 className="articleTitle">Future of Work</h2>
                    <p className="articleMeta">Majority of peole will work in jobs that don’t exist today.</p>
                    <div className="articleFooter">
                        <div className="authorBoxContainer">
                            <img src={Avatar} alt="" />
                            <div className="Authordetails">
                                <h3 className="authorName">Johanna Murray</h3>
                                <p className="authordesignation">Founder Of @CodeCrushLab</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleBox

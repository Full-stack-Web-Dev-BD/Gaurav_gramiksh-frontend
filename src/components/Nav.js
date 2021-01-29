import React from 'react'

const Nav = () => {
    return (
        <div className="nav">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo-side">
                            <img src='/images/Logo.png' />
                        </div>
                    </div>
                    <div className="col-md-6 menu">
                        <ul>
                            <li> <a href="#"> ABOUT</a></li>
                            <li> <a href="#"> RESOURCES</a></li>
                            <li> <a href="#"> BLOG</a></li>
                            <li> <a href="#"> CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <div className="right-images">
                            <img className="first-img" src='/images/icon-1.png' />
                            <img src='/images/icon-2.png' />
                            <img src='/images/icon-3.png' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav

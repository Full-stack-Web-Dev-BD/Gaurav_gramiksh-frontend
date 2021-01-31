import React from 'react'
import Nav from '../components/Nav'

const IndexPage = () => {
    return (
        <div className="index-page">
            <Nav />
            <div className="tech-batter">
                <div className="container">
                    <div className="tech-top-content text-center">
                        <h1>TEACH BETTER,<span>TOGETHER</span></h1>
                        <p>The Largest Resource Library For Teachers By Teachers</p>
                        <button className="btn ">GET STARTED</button>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-md-12 col-sm-12 tag-buttons">
                            <div>
                                <button className="btn">DISCUSSION FORUMS </button>
                                <button className="btn">RESOURCE SHARING</button>
                                <button className="btn">CONTENT REPOSITORIES LESSON</button>
                            </div>
                            <div className="mt-4">
                                <button className="btn">PLAN MANAGEMENT</button>
                                <button className="btn">COMMUNITY LEARNING</button>
                                <button className="btn">CLASS MANAGEMENT SYSTEM</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="join">
                <img className="abs-image" src="/images/Left-icon.png" />
                <div className="join-content">
                    <div className="container text-center">
                        <h1>JOIN THE <br />SCHOOL TRIBE COMMUNITY</h1>
                        <div className="input-holder">
                            <div class="input-group ">
                                <input type="text" class="form-control" defaultValue="ENTER EMAIL" placeholder="ENTER EMAIL" aria-label="ENTER EMAIL" aria-describedby="basic-addon2" />
                                <div class="input-group-append ">
                                    <img src="/images/arrow-icon.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stronger">
                <div className="stronger-content">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 side-bg">
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="stronger-details">
                                <h1>MAKING <span>STRONGER </span>TEACHER</h1>
                                <div className="pr-8">
                                    <p>School Tribe empowers 70 million teacher community by voicing their ideas through a community platform for peer-topeer learning. School Tribe’s foundation is based on growth,community, and sharing.</p>
                                </div>
                                <button className="btn"> CHANGE THE STATUS QUO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-features">
                <div className=" product-features-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12">
                                <div className="features-details">
                                    <h1>PRODUCT <span>FEATURES</span></h1>
                                    <p>School Tribe empowers 70 million teacher community by
                                    voicing their ideas through a community platform for peer-topeer learning. School Tribe’s foundation is based on growth,community, and sharing</p>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="single-feature">
                                            <img src="/images/icon-4.png" />
                                            <h3>CLASS MANAGEMENT</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="single-feature">
                                            <img src="/images/icon-7.png" />
                                            <h3>CONTENT REPOSITORIES</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="single-feature">
                                            <img src="/images/icon-8.png" />
                                            <h3>COMMUNITY LEARNING</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4 col-sm-6">
                                        <div className="single-feature">
                                            <img src="/images/icon-5.png" />
                                            <h3>DISCUSSION FORUMS</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="single-feature">
                                            <img src="/images/icon-6.png" />
                                            <h3>RESOURCE SHARING</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <div className="single-feature">
                                            <img src="/images/icon-9.png" />
                                            <h3>LESSON PLANNIN</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subscribe-area">
                <div className="subscribe-contant">
                    <div className="row">
                        <div className=" col-xl-7 col-md-12   col-sm-12 subscribe-left">
                            <div className="subscribe-left-content">
                                <div className="col-md-10  offset-md-1">
                                    <img src="/images/logo-full-white.png" />
                                    <div className="row">
                                        <div className="col-md-3 col-sm-6">
                                            <h4>ABOUT</h4>
                                            <ul>
                                                <li> <a href="#"> Mission</a></li>
                                                <li> <a href="#"> Vision</a></li>
                                                <li> <a href="#"> Team</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <h4>MEDIA</h4>
                                            <ul>
                                                <li><a href="#"> Blog</a></li>
                                                <li><a href="#"> Press</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <h4>RESOURCES</h4>
                                            <ul>
                                                <li> <a href="#"> Discussion Forums </a></li>
                                                <li> <a href="#"> Content Repositories </a></li>
                                                <li> <a href="#"> Lesson Plans </a></li>
                                                <li> <a href="#"> Classroom Management </a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 col-sm-6">
                                            <h4>CONTACT</h4>
                                            <ul>
                                                <li>  <a href="#">  FAQs</a></li>
                                                <li>  <a href="#">  Newsletter</a></li>
                                                <li>  <a href="#">  Volunteer</a></li>
                                                <li>  <a href="#">  Social</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-xl-5 col-md-12   col-sm-12 join">
                            <div className="join-content">
                                <div className="container text-center">
                                    <h1>SUBSCRIBE</h1>
                                    <p>Subscribe to get the latest updates.</p>
                                    <div className="input-holder">
                                        <div class="input-group ">
                                            <input type="text" class="form-control" defaultValue="ENTER EMAIL" placeholder="ENTER EMAIL" aria-label="ENTER EMAIL" aria-describedby="basic-addon2" />
                                            <div class="input-group-append ">
                                                <img src="/images/arrow-blac.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-nav">
                <div className="footer-nav-contant">
                    <div className="col-md-10  offset-md-1">
                        <div className="row">
                            <div className="col-md-12 col-sm-12  text-right">
                                <ul>
                                    <li> <a href="#">Copyright Information </a></li>
                                    <li> <a href="#">Terms & Conditions </a> </li>
                                    <li> <a href="#">Privacy Policy </a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage

import React from 'react'
import Header1 from '../component/Header1'
import Footer from '../component/Footer'

export default function About() {
    return (
        <div>
            <Header1/>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="detail-box">
                                <h2>
                                    About us
                                </h2>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                                </p>
                                <a href>
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="img-box">
                                <img src="images/about-img.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end about section */}
            {/* info section */}
            <section className="info_section ">
                <div className="container">
                    <h4>
                        Get In Touch
                    </h4>
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="info_items">
                                <div className="row">
                                    <div className="col-md-4">
                                        <a href>
                                            <div className="item ">
                                                <div className="img-box ">
                                                    <i className="fa fa-map-marker" aria-hidden="true" />
                                                </div>
                                                <p>
                                                    Lorem Ipsum is simply dummy text
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href>
                                            <div className="item ">
                                                <div className="img-box ">
                                                    <i className="fa fa-phone" aria-hidden="true" />
                                                </div>
                                                <p>
                                                    +02 1234567890
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4">
                                        <a href>
                                            <div className="item ">
                                                <div className="img-box">
                                                    <i className="fa fa-envelope" aria-hidden="true" />
                                                </div>
                                                <p>
                                                    demo@gmail.com
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-box">
                    <h4>
                        Follow Us
                    </h4>
                    <div className="box">
                        <a href>
                            <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                        <a href>
                            <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                        <a href>
                            <i className="fa fa-youtube" aria-hidden="true" />
                        </a>
                        <a href>
                            <i className="fa fa-instagram" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>

    )
}

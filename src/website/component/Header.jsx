import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Header() {

    const redirect = useNavigate();


    const logout = () => {
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success');
        redirect('/');
        return false;

    }

    return (
        <div>

            <div className="hero_area">
                {/* header section strats */}
                <header className="header_section">
                    <div className="header_top">
                        <div className="container-fluid">
                            <div className="contact_nav">
                                <a href>
                                    <i className="fa fa-phone" aria-hidden="true" />
                                    <span>
                                        Call : +01 123455678990
                                    </span>
                                </a>
                                <a href>
                                    <i className="fa fa-envelope" aria-hidden="true" />
                                    <span>
                                        Email : demo@gmail.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <NavLink className="navbar-brand">
                                    <span>
                                        Inance
                                    </span>
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className> </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about"> About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                                        </li>
                                        <div className="nav-item d-flex">
                                            {(() => {
                                                if (localStorage.getItem('uid')) {
                                                    return (
                                                        <>
                                                            <li>
                                                                <NavLink to="/myaccount" className="nav-link">
                                                                    <i className="fa fa-user" aria-hidden="true" />
                                                                    <span>
                                                                        {localStorage.getItem('uname')}
                                                                    </span>
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:void(0)" className='nav-link' onClick={logout}>
                                                                    <span>
                                                                        Logout
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        </>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <NavLink className="nav-link" to="/cuslogin">Log in</NavLink>
                                                    )
                                                }
                                            })()}

                                        </div>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
                {/* end header section */}
                {/* slider section */}
                <section className="slider_section ">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="detail-box">
                                    <h1>
                                        Repair and <br />
                                        Maintenance <br />
                                        Services
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
                                    </p>
                                    <a href>
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src="images/slider-img.png" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
            </div>

        </div>
    )
}

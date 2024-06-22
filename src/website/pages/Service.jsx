import React, { useEffect, useState } from 'react'
import Header1 from '../component/Header1'
import Footer from '../component/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Service() {
    useEffect(() => {
        fetch();
    }, []);
    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/category`);
        console.log(res.data);
        setData(res.data);
    }
    return (
        <div>
            <Header1 />
            <section className="service_section layout_padding">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2> Our Services </h2>
                    </div>
                    <div className="row">
                        {
                            data && data.map((value) => {
                                return (
                                    <div className="col-sm-6 col-md-4 mx-auto">
                                        <div className="box ">
                                            
                                            <div className="img-box">
                                                <img src={value.img} alt />
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    {value.category_name}
                                                </h5>
                                                <p>
                                                    {value.category_description}
                                                </p>
                                            </div>
                                            <Link to={'/viewservice/'+ value.id}>
                                                <div className="btn-box"><a>view</a></div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                            )
                        }
                        
                    </div>
                    
                </div>
            </section>
            {/* end service section */}
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
            <Footer />
        </div>

    )
}

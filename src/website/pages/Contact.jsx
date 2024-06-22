import React, { useState } from 'react'
import Header1 from '../component/Header1'
import Footer from '../component/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Contact() {


    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        phno: "",
        email: "",
        comment: "",
    })


    const handleOnchange = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    }

    function validation() {
        var ans = true;
        if (formvalue.name == "") {
            toast.error("Please enter your name!")
            ans = false;
            return false;
        }
        if (formvalue.phno == "") {
            toast.error("Phone number is Required!")
            ans = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error("Please enter your Email id!")
            ans = false;
            return false;
        }
        if (formvalue.comment == "") {
            toast.error("Please enter your Message!")
            ans = false;
            return false;
        }
        return ans;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/contact`, formvalue);
            console.log(res)
            if (res.status == 201) {
                toast.success("Send successfully")
                setFormvalue({ ...formvalue, id: "", name: "", phno: "", email: "", comment: "" })
            }
        }
    }
    return (
        <div>
            <Header1 />
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <form action='' method='post' onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" name='name' onChange={handleOnchange} value={formvalue.name} style={{ color: 'black' }} placeholder="name@example.com" />
                                    <label htmlFor="inputEmail">Name </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="tel" className="form-control" name='phno' onChange={handleOnchange} value={formvalue.phno} style={{ color: 'black' }} placeholder="name@example.com" />
                                    <label htmlFor="inputEmail">Phone Number </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" placeholder="Email" name='email' value={formvalue.email} onChange={handleOnchange} style={{ color: 'black' }} />
                                    <label htmlFor="inputEmail">Email </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" cols="30" rows="10" name='comment' value={formvalue.comment} onChange={handleOnchange} placeholder="Message" style={{ color: 'black' }}></textarea>
                                    {/* <input type="text" className="form-control message-box" name='comment' onChange={handleOnchange} placeholder="Message" style={{color:'black'}} /> */}
                                    <label htmlFor="inputEmail">Comment </label>
                                </div>
                                <div className="d-flex ">
                                    <button type='submit'>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* end contact section */}
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

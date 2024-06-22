import React, { useEffect, useState } from 'react'
import Header1 from '../component/Header1'
import Footer from '../component/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link,useNavigate } from 'react-router-dom'

export default function Signup() {

    const redirect=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('uid'))
        {
            redirect('/');
        }
    });


    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: "Unblock",
    })


    const handleOnchange = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    }

    function validation() {
        var ans = true;
        if (formvalue.name == "") {
            toast.error("Please enter your name");
            ans = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error("Please enter your Email id");
            ans = false;
            return false;
        }
        if (formvalue.password == "") {
            toast.error("Please enter your password");
            ans = false;
            return false;
        }
        return ans;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/customer`, formvalue);
            if (res.status == 201) {
                toast.success("Registerd")
                setFormvalue({ ...formvalue, id: "", name: "", email: "", password: "" })
            }
        }
    }
    return (
        <div>
            <div id="layoutAuthentication_content">
                <Header1 />
                <main>
                    <div className="container mb-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        <form action='' method='post' onSubmit={handleSubmit}>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" name='name' onChange={handleOnchange} value={formvalue.name} id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                <label htmlFor="inputFirstName">First name</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputEmail" onChange={handleOnchange} value={formvalue.email} name='email' type="email" placeholder="name@example.com" />
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="inputPassword" onChange={handleOnchange} value={formvalue.password} name='password' type="password" placeholder="Create a password" />
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><button className="btn btn-primary btn-block" type='submit'>Create Account</button></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><Link to="/cuslogin">Have an account? Go to login</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>

    )
}

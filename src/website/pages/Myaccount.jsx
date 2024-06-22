import React, { useEffect, useState } from 'react'
import Header1 from '../component/Header1'
import Footer from '../component/Footer'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'



export default function Myaccount() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!(localStorage.getItem('uid'))) {
            redirect('/');
        }
        else {
            fetch();
        }
    }, []);
    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/customer/${localStorage.getItem('uid')}`);
        setData(res.data);
    }
    return (
        <div>
            <Header1 />
            <section className="bg-light my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-4 mb-sm-5">
                            <div className="card card-style1 border-0">
                                <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 mb-4 mb-lg-0">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="..." />
                                        </div>
                                        <div className="col-lg-6 px-xl-10">
                                            <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                                                <h3 className="h2 text-white mb-0">{data.name}</h3>
                                            </div>
                                            <ul className="list-unstyled mb-1-9">
                                                <li className="mb-2 mb-xl-3 display-28"><span className="display-26 text-secondary me-2 font-weight-600">Email :</span> {data.email}</li>
                                                <li className="display-28 mb-2"><span className="display-26 text-secondary me-2 font-weight-600">Phone:</span> 507 - 541 - 4567</li>
                                                <li className="display-28"><Link><button className='btn' style={{background:"#D1E3FF"}}>Edit Profile</button></Link></li>
                                            </ul> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    )
}

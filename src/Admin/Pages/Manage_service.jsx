import React, { useEffect, useState } from 'react'
import Ad_header from '../Component/Ad_header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Manage_service() {
    useEffect(() => {
        fetch();
    }, []);
    const [Data, setData] = useState([]);

    const redirect = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('uemail')) {
            redirect('/login');
        }
    },);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/service`)
        setData(res.data)
    }

    const deleteHandel = async (id) => {
        console.log(id)
        const res = await axios.delete(`http://localhost:3000/service/${id}`);
        toast.success("Service delete Suceesfully")
        fetch();

    }
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/service/${id}`);
        setFormvalue(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        service_name: "",
        service_description: "",
    })



    const handleOnchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    }

    function validation() {
        var ans = true;
        if (formvalue.service_name == "") {
            toast.error('Enter service name!');
            ans = false;
            return false;
        }
        if (formvalue.service_description == "") {
            toast.error('Enter service description!');
            ans = false;
            return false;
        }
        if (formvalue.price == "") {
            toast.error('Enter service price!');
            ans = false;
            return false;
        }


        return ans;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/service/${formvalue.id}`, formvalue);
            if (res.status == 200) {
                toast.success("Service updated succesfully")
                setFormvalue({ ...formvalue, ser_id: "", service_name: "", service_description: "", price: "" })
                fetch();
            }
        }
    }

    return (
        <div>
            <div className='sb-nav-fixed'>
                <Ad_header />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_content">
                        <main>
                            <div className="container">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-table me-1" />
                                        Services
                                    </div>
                                    <div className="card-body">
                                        <table className='table'>
                                            <thead className='thead-dark'>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Service name</th>
                                                    <th>Category id</th>
                                                    <th>Service description</th>
                                                    <th>Price</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    Data && Data.map((value, index, arr) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>{value.id}</td>
                                                                <td>{value.service_name}</td>
                                                                <td>{value.cate_id}</td>
                                                                <td>{value.service_description}</td>
                                                                <td>{value.price}</td>
                                                                <td>
                                                                    <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}><i className="fa-solid fa-trash"></i></button>
                                                                    <button className='btn btn-warning ml-2' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => editdata(value.id)} ><i className="fa-regular fa-pen-to-square"></i></button>
                                                                </td>
                                                            </tr>

                                                        )
                                                    }

                                                    )
                                                }
                                            </tbody>
                                        </table>
                                        <div className="modal fade" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                                        <div className="card-header"><h3 className="text-center font-weight-dark my-4">Edit service type</h3></div>
                                                        <div className="card-body">
                                                            <form action='' method='post' onSubmit={handleSubmit}>
                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" id="inputEmail" onChange={handleOnchange} value={formvalue.service_name} name='service_name' type="text" placeholder="name@example.com" />
                                                                    <label htmlFor="inputEmail">Service type </label>
                                                                </div>
                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" type="text" onChange={handleOnchange} value={formvalue.service_description} name='service_description' placeholder="name@example.com" />
                                                                    <label htmlFor="inputEmail">Service Description </label>
                                                                </div>
                                                                <div className="form-floating mb-3">
                                                                    <input className="form-control" type="number" onChange={handleOnchange} value={formvalue.price} name='price' placeholder="name@example.com" />
                                                                    <label htmlFor="inputEmail">Price </label>
                                                                </div>

                                                                <div className="mt-4 mb-0">
                                                                    <div className="d-grid"><button className="btn btn-info btn-block" type='submit'>Update Category</button></div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

        </div>
    )
}

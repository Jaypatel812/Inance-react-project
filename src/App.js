import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './website/pages/About'
import Contact from './website/pages/Contact'
import Service from './website/pages/Service'
import Pnf from './website/pages/Pnf'
import Home from './website/pages/Home'
import Dashboard from './Admin/Pages/Dashboard'
import Man_Customer from './Admin/Pages/Man_Customer'
import Contactadmin from './Admin/Pages/Contactadmin'
import Appointment from './Admin/Pages/Appointment'
import Feedbackadmin from './Admin/Pages/Feedbackadmin'
import Ad_login from './Admin/Component/Ad_login'
import Cus_login from './website/pages/Cus_login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './website/pages/Signup'
import Myaccount from './website/pages/Myaccount'
import Manage_category from './Admin/Pages/Manage_category'
import Add_category from './Admin/Pages/Add_category'
import Add_service from './Admin/Pages/Add_service'
import Manage_service from './Admin/Pages/Manage_service'
import View_service from './website/pages/View_service'
import Add_blog from './Admin/Pages/Add_blog'
import Manage_blog from './Admin/Pages/Manage_blog'
import Blog from './website/pages/Blog'



function App() {
    return (
        <BrowserRouter>
        <ToastContainer/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/service" element={<Service/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/viewservice/:cate_id" element={<View_service/>}></Route>
                <Route path="*" element={<Pnf/>}></Route>
                <Route path="/cuslogin" element={<Cus_login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/myaccount" element={<Myaccount/>}></Route>


                {/* Admin */}
                <Route path="/dashboard" element={<Dashboard/>}></Route>
                <Route path="/add_category" element={<Add_category/>}></Route>
                <Route path="/manage_category" element={<Manage_category/>}></Route>
                <Route path="/add_service" element={<Add_service/>}></Route>
                <Route path="/manage_service" element={<Manage_service/>}></Route>
                <Route path="/man_customer" element={<Man_Customer/>}></Route>
                <Route path="/contactadmin" element={<Contactadmin/>}></Route>
                <Route path="/man_appo" element={<Appointment/>}></Route>
                <Route path="/add_blog" element={<Add_blog/>}></Route>
                <Route path="/man_blog" element={<Manage_blog/>}></Route>
                <Route path="/man_feedback" element={<Feedbackadmin/>}></Route>
                <Route path="/login" element={<Ad_login/>}></Route>


            </Routes>
        </BrowserRouter>
    )
}

export default App
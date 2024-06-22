import React from 'react'
import Footer from '../component/Footer'
import Header1 from '../component/Header1'
import { Link } from 'react-router-dom'

export default function Pnf() {
  return (
    <div>
        <Header1/>
        <div className="container col-sm-12 my-5">
            <div>
                <h1 align="center">Page Not Found</h1>
                <h2 align="center"> 404</h2>
                <div align="center"><Link to="/" className='btn btn-danger'>Back</Link></div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Header/>
        <div className="cont">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout
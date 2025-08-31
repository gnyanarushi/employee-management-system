import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const HeaderComponent = () => {
  return (
    <div>
      <header>
      <nav className='navbar navbar-dark bg-dark'>
            <a className='navbar-brand' href='/listEmployees'>Employee Management System</a>           
        </nav> 
      </header>
    </div>
  )
}

export default HeaderComponent
import React from 'react'
import { Link } from 'react-router-dom';
import '../home.css';
export default function home() {
  return (
    <div>

<div className="wrapper">
  <div className="Container">
    <div className="nav">
      <div className="logo">
        HR Crew
      </div>
      <div className="menu">
        <ul className="navMenu">
          <li><Link to='/create'>Add Employee</Link></li>
          <li><Link to='/Read'>Manage Employee</Link></li>
        </ul>
      </div>
    </div>
    <div className="header">
      <h1>Employee Management System</h1>
      <Link to='/create' className="aempbtn" type="button">
        Add Employee
      </Link>
      
    </div>
  </div>
</div>


    </div>
  )
}
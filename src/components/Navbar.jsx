import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div class="left">
                <h1 style={{ color: 'white', userSelect: 'none'}}>Welcome!</h1>
            </div>

            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Projects</a></li>
            </ul>

            <div class="box-icons">
                <a href='#'><i class='bx bxl-linkedin-square' ></i></a>
                <a href='#'><i class='bx bxs-file-pdf' ></i></a>
                <a href='#'><i class='bx bxl-gitlab' ></i></a>
                <a href='#'><i class='bx bxl-github'></i></a>
            </div>

    </header>
  )
}

export default Navbar
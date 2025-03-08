import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

	// Estado para controlar la visibilidad de la sidebar
	const [isSidebarOpen, setIsSidebarOpen] = useState(null);

	// Manejador de la visibilidad de la sidebar
	const toggleSidebar = () => {
		setIsSidebarOpen(prevState => prevState === true ? false : true);
	}

  return (
    <div className='container'>
      <header>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div className="left">
                <h1 style={{ color: 'white', userSelect: 'none'}}>Welcome!</h1>
            </div>

            <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Projects</a></li>
            </ul>

            <div className="box-icons">
                <a href='https://www.linkedin.com/in/jorge-luis-escorza-s%C3%A1nchez-9ab935325/' target='_blank' rel='noopener noreferrer'><i class='bx bxl-linkedin-square' ></i></a>
                <a href='/docs/CV_JorgeEscorza.pdf' target='_blank' rel='noopener noreferrer'><i class='bx bxs-file-pdf' ></i></a>
                <a href='https://gitlab.com/JorgeEscorza' target='_blank' rel='noopener noreferrer'><i class='bx bxl-gitlab' ></i></a>
                <a href='https://github.com/JorgeEscorza' target='_blank' rel='noopener noreferrer'><i class='bx bxl-github'></i></a>
            </div>

            <div className="menu-icon" onClick={toggleSidebar}>
                <i class='bx bx-menu-alt-right'></i>
            </div>

      </header>

		{/* Sidebar */}
		{isSidebarOpen !== null && (
			<div className={`sidebar ${isSidebarOpen ? 'open-sidebar' : 'close-sidebar'}`}>
				<div className="close-icon" onClick={toggleSidebar}>
					<i className='bx bx-x'></i>
				</div>

				<ul>
					<li><a href='#'>About</a></li>
					<li><a href='#'>Skills</a></li>
					<li><a href='#'>Projects</a></li>
				</ul>

				<div className="social-icons">
					<a href='https://www.linkedin.com/in/jorge-luis-escorza-s%C3%A1nchez-9ab935325/' target='_blank' rel='noopener noreferrer'><i class='bx bxl-linkedin-square' ></i></a>
					<a href='/docs/CV_JorgeEscorza.pdf' target='_blank' rel='noopener noreferrer'><i class='bx bxs-file-pdf' ></i></a>
					<a href='https://gitlab.com/JorgeEscorza' target='_blank' rel='noopener noreferrer'><i class='bx bxl-gitlab' ></i></a>
					<a href='https://github.com/JorgeEscorza' target='_blank' rel='noopener noreferrer'><i class='bx bxl-github'></i></a>
				</div>
			</div>
		)}

    </div>
  )
}

export default Navbar
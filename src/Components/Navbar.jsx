import { useState } from "react"
import { Link as ScrollLink } from 'react-scroll';
import {useTheme}  from '../context/darkmode';

function Navbar() {

     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const { darkMode, toggleDarkMode } = useTheme();



     const handleSideBar = () => {
          setIsSidebarOpen(!isSidebarOpen)
     }
     return (
          <>
               <nav className={`d-flex justify-content-around align-items-center  ${darkMode ? 'dark-mode' : ''}`}>
                    <span onClick={handleSideBar}>
                         {isSidebarOpen ? <i className="fa-solid fa-circle-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </span>
                    <h1 className="logo">Deepak.dev</h1>

                    
                    <ul>
                         <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                         <li><ScrollLink to="about" smooth={true} >About</ScrollLink></li>
                         <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
                         <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
                    </ul>
                    <div onClick={toggleDarkMode}>
                         {darkMode ? 
                         <span><i className="theme fa-solid fa-sun"></i></span> :
                         <span><i className="theme fa-solid fa-moon"></i></span>
                         }
                    </div>
               </nav>

               {isSidebarOpen && (
                    <ul className={`sideBar ${darkMode ? 'dark-mode' : ''}`}>
                         <li><ScrollLink smooth={true} duration={500} to="home" onClick={handleSideBar}>Home</ScrollLink></li>
                         <li><ScrollLink smooth={true} duration={500} to="about" onClick={handleSideBar}>About</ScrollLink></li>
                         <li><ScrollLink smooth={true} duration={500} to="projects" onClick={handleSideBar}>Projects</ScrollLink></li>
                         <li><ScrollLink smooth={true} duration={500} to="contact" onClick={handleSideBar}>Contact</ScrollLink></li>
                    </ul>
               )}

          </>
     )
}

export default Navbar

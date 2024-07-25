import { useState } from "react"
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {

     const [isSidebarOpen, setIsSidebarOpen] = useState(false)

     const handleSideBar = () => {
          setIsSidebarOpen(!isSidebarOpen)
     
     }
     return (
          <>
               <nav className="d-flex justify-content-around align-items-center">
                    <h1 className="logo">Deepak.dev</h1>

                    <span onClick={handleSideBar}>
                         {isSidebarOpen ? <i className="fa-solid fa-circle-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </span>
                    <ul>
                         <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
                         <li><ScrollLink to="about" smooth={true} >About</ScrollLink></li>
                         <li><ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink></li>
                         <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
                    </ul>
               </nav>

               {isSidebarOpen && (
                    <ul className="sideBar">
                         <li><ScrollLink smooth={true} duration={500} to="home">Home</ScrollLink></li>
                         <li><ScrollLink smooth={true} duration={500} to="about">About</ScrollLink></li>
                         <li><ScrollLink smooth={true} duration={500} to="projects">Projects</ScrollLink></li>
                         <li><ScrollLink smooth={true} duration={500} to="contact">Contact</ScrollLink></li>
                    </ul>
               )}
          </>
     )
}

export default Navbar

import { useState } from "react"
import {Link} from 'react-router-dom' 

function Navbar() {

     const [isSidebarOpen, setIsSidebarOpen] = useState(false)

     const handleSideBar = () => {
          setIsSidebarOpen(!isSidebarOpen)
     
     }
     return (
          <>
               <nav className="d-flex justify-content-between align-items-center">
                    <h1 className="logo">Deepak.dev</h1>

                    <span onClick={handleSideBar}>
                         {isSidebarOpen ? <i className="fa-solid fa-circle-xmark"></i> : <i className="fa-solid fa-bars"></i>}
                    </span>
                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="about">About</Link></li>
                         <li><Link to="projects">Projects</Link></li>
                         <li><Link to="contact">Contact</Link></li>
                    </ul>
               </nav>

               {isSidebarOpen && (
                    <ul className="sideBar">
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="about">About</Link></li>
                         <li><Link to="projects">Projects</Link></li>
                         <li><Link to="contact">Contact</Link></li>
                    </ul>
               )}
          </>
     )
}

export default Navbar

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

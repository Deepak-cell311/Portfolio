import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import profile from './assets/Profile.webp'
import icons from './assets/icons.webp'

import {
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Home image = {[profile, icons]}/>   
        <Footer />
      </BrowserRouter>
    </>

  )
}

export default App
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import profile from './assets/Profile.png'
import icons from './assets/icons.webp'

import {
  BrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from "./context/darkmode"

function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
            <Home image = {[profile, icons]}/>   
          <Footer />
          </BrowserRouter>
      </ThemeProvider>
    </>

  )
}

export default App

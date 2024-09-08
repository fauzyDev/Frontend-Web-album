import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Aos from "aos"
import "aos/dist/aos.css"
import "./App.css"

function App() {
    useEffect(()=> {
      Aos.init(
          { 
            duration: 600, 
            once: true,
            offset: 200,
            easing: "ease-in-out" 
          }
        )
  }, [])

  return (
    <>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App
import { useEffect } from "react"
import Layout from "./Layout"
import Home from "./pages/Home"
import Foto from "./pages/Foto/page"
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
    <Layout>
      <main>
        <Home/>
        <Foto/>
      </main>
    </Layout>
  )
}

export default App
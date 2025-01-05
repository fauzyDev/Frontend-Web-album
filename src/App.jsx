import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import Layout from "./Layout"
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
        <Outlet/>
      </main>
    </Layout>
  )
}

export default App
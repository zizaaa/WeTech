import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Service from "./pages/Service"
import Projects from "./pages/Projects"
import Form from "./pages/Form"

function App() {
  return (
    <main>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="/About" element={<AboutUs/>}/>
              <Route path="/Service" element={<Service/>}/>
              <Route path="/Projects" element={<Projects/>}/>
              <Route path="/Form" element={<Form/>}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App

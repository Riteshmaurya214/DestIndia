import Navbar from './Components/Navbar'

import './App.css'
import { Routes, Route, HashRouter } from "react-router-dom"; 

import Footer from './Components/Footer'
import Home from './Pages/Home'



function App() {

  

  return (
   <div>
      <Navbar/>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <Home/>}/>
        </Routes>
      </HashRouter>
    
      <Footer/>
   </div>
  )
}

export default App
 
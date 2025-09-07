import Navbar from './Components/Navbar'

import './App.css'
import { Routes, Route, HashRouter } from "react-router-dom"; 

import Footer from './Components/Footer'
import Home from './Pages/Home'
import CartDetails from './Pages/CartDetails';
import CategoryPage from './Pages/CategoryPage';
import ScrollToTop from './Components/ScrollToTop';



function App() {

  

  return (
   <div>
      <Navbar/>
      <div className="pt-22 sm:pt-25 md:pt-30"></div>
      <ScrollToTop/>
        <Routes>
         
          <Route path="/" element={ <Home/>}/>
          <Route path="/categorypage/:id" element={ <CategoryPage/>}/>
           <Route path="/productDetails/:category/:id" element={ <CartDetails/>}/>
        </Routes>
   
    
      <Footer/>
   </div>
  )
}

export default App
 
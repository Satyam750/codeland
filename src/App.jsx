import React from 'react'
import About from './Components/About/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import "./App.css"
const App = () => {
  return (
    <div>
     <Navbar/>
      <div className='space'></div>
      <About/>
    <Footer/>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import  Nav  from './Nav'
import Header from './Header'
import About from './About'
import Expertise from './Expertise'
import Services from './Services'
import Process from './Process'
import Testimonials from './Testimonials'
import Footer from './Footer'

function App() {
 

  return (
    <div>
      <Nav/>
      <Header/>
      <About/>
      <Expertise/>
      <Services/>
      <Process/>
      <Testimonials/>
      <Footer/>
    </div>
  
  )
}

export default App

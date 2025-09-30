import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/Skills'
import Works from './components/Works/works'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
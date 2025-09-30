import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/Skills'
import Works from './components/Works/works'




const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      
      
    </div>
  )
}

export default App
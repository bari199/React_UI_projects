import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Intro from './components/Intro/intro'
import Skills from './components/Skills/Skills'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      
    </div>
  )
}

export default App
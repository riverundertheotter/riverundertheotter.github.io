import { useState } from 'react'
import buizel from './assets/buizel.jpeg';

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='Header'>
        Welcome to River Land!
      </div>
      <div className='Links'>
        <div><a href='https://github.com/riverundertheotter'>Github </a></div>
        <div><a href='https://www.linkedin.com/in/river-cook/'>LinkedIn </a></div>
      </div>
      <img className='Buizel' src={buizel} alt='Buizel' />
    </div>
  )
}

export default App

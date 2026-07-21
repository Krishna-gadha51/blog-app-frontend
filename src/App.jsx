import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Create from './components/Create'
import ViewAll from './components/ViewAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
      
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

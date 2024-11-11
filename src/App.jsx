import React from 'react'
import "./App.css"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Power from './pages/Power'
import Services from './pages/Services'
import Partners from './pages/Partners'
import Media from './pages/Media'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/power' element = {<Power/>} />
            <Route path='/services' element = {<Services/>} />
            <Route path='/partners' element = {<Partners/>} />
            <Route path='blogs' element = {<Media/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
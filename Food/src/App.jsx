import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Route, Router, Routes } from 'react-router-dom'
// import ExploreMenu from './components/ExploreMenu/ExploreMenu'
// import Home from './pages/Home/Home'
import ExploreMenu from './Components/ExploreMenu/ExploreMenu'
import Nav from './Components/Navbar/Nav'
import Loyalty from './Pages/Loyalty/Loyalty'
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
import Contact from './Pages/Contact/Contact'
import CategoryMenu from './Pages/CategoryMenu/CategoryMenu'
// import Home from './Pages/Home/Home'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme , setTheme] = useState(current_theme? current_theme: 'light');

  useEffect(()=>{
    localStorage.setItem('current_theme', theme)
  },[theme])

  return (
    <div className={`container ${theme}`}>
      <Nav theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Menu' element={<Menu/>} />
        <Route path='/Loyalty' element={<Loyalty/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='Menu/CategoryMenu' element={<CategoryMenu/>} />
      </Routes>
    </div>
  )
}

export default App
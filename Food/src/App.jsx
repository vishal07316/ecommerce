import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Route, Router, Routes } from 'react-router-dom'
// import ExploreMenu from './components/ExploreMenu/ExploreMenu'
// import Home from './pages/Home/Home'
import ExploreMenu from './Components/ExploreMenu/ExploreMenu'
import Nav from './Components/Navbar/Nav'
import Home from './Pages/Home/Home'
import Menu from './Pages/Menu/Menu'
// import Home from './Pages/Home/Home'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        {/* <Route path='/order' element={<PlaceOrder/>} /> */}
      </Routes>
    </div>
  )
}

export default App
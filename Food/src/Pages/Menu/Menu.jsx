import React from 'react'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import { useState } from 'react';
import './Menu.css'
import Nav from '../../Components/Navbar/Nav';

const Menu = () => {
    const [category,setCategory] = useState("All");
    return (
        <>
        {/* <Nav/> */}
      <div className='Menu'>
      <div> 
        {/* <ExploreMenu category={category} setCategory={setCategory}/> */}
        <ExploreMenu category={category} setCategory={setCategory}/>
      </div>
      <div>
        <FoodDisplay category={category}/>
  {/* <FoodDisplay category={category}/> */}
      </div>
      </div>
    </>
    )
}

export default Menu
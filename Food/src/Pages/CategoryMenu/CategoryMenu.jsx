import React, { useState } from 'react'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import './CategoryMenu.css'

const Category_Menu = () => {
    const [category,setCategory] = useState("All");
    return (
      <div className='Menu'>
      <div> 
        <ExploreMenu category={category} setCategory={setCategory}/>
      </div>
      <div>
        <FoodDisplay category={category}/>
      </div>
      </div>
    )

}

export default Category_Menu
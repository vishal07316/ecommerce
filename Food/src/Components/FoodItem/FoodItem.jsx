// import React from 'react'
// import { assets } from '../../assets/frontend_assets/assets'
// import './FoodItem.css'

// const FoodItem = ({id,name,price,description,image}) => {
//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={image} alt="" />
//         </div>
//         <div className='food-item-info'>
//             <div className='food-item-name-rating'>
//             <p className='food-item-title'>{name}</p>
//             <img src={assets.rating_starts} alt=""/>
//             </div>
//         <p className='food-item-desc'>{description}</p>
//         <p className='food-item-price'>{price} Rs</p>
//         </div>
//     </div>
//   )
// }

// export default FoodItem
import React from 'react'
import { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../Context/StoreContext'
import './FoodItem.css'

const FoodItem = ({ id, name, price, description, image }) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

    return (

    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt="" />
            {/* {!cartItems[id]
                ?<img className='add' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            } */}
        </div>
        <div className='food-item-info'>
                <p className='food-item-name'>{name}</p>
                <br/>
            <p className='food-item-desc'>{description}</p>
            <div className='food-item-price-add'>
                <p className='food-item-price'>₹{price}
                {/* <button className='food-item-add-button'>Add</button> */}
            <div className='food-item-name-rating'>
                <img src={assets.rating_starts} alt="rating" />
            </div>
                </p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem

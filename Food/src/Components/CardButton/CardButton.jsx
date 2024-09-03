import React from 'react'
import { Link } from 'react-router-dom'
import './CardButton.css'
const Button = (props) => {
    return (
        // <a href='https://imperiorestaurant.dotpe.in/
        // ' className='CardButton'>
        //     {props.children}
        // </a>
        < Link to='/Menu' className='CardButton'>
            {props.children}
        </Link>
  )
}

export default Button
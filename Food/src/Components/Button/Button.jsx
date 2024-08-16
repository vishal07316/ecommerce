import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <a href='https://imperiorestaurant.dotpe.in/
        ' className='Button'>
            {props.children}
        </a>
  )
}

export default Button
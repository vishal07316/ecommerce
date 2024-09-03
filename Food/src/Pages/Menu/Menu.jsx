// import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Menu.css'
import { banner, Exclusive_Menu, menu_list, new_menu , Recommended_Menu } from '../../assets/frontend_assets/assets'
// import { NextArrow, PrevArrow } from '../../Components/CustomArrows/CustomArrow'
// const Menu = ({category,setCategory}) => {
//   // return(
//   //   <Menu/>
//   // )}
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    // nextArrow:<NextArrow />,
    // prevArrow:<PrevArrow />,  
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 900,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 500,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide:1
          }
      },
      {
          breakpoint: 300,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide:1
          }
      }
  ]
};



// return(
// <div className='Menu' id='Menu'>
// <div className="Slider">
//       <Slider {...settings}>
//         {banner.map((item, index) => (
//           <div key={index} className="Slider-items">
//             <div className="Slider-image">
//             <img src={item.image} alt=""/>
//             </div>
//           </div>
//         ))}
//       </Slider>
//   </div>

// <div className='Exclusive-menu' id='Exclusive-menu'>
//         <h1>
//         Exclusively on Imperio
//         </h1>
//     <p className='Exclusive-menu-text'></p>
//         <div className='Exclusive-menu-list'>
//             {Exclusive_Menu.map((item,index)=>
//             {
//               return (
//                 <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Exclusive-menu-list-item'>
//                       <img src={item.menu_image} alt="" />
//                         <p>{item.menu_name}</p>
//                     </div>
//                 )
//               })}
//         </div>
//     <hr/>
//     </div>
{/* <div className='Recommended-menu' id='Recommended-menu'>
        <h1>
        Recommended For You
        </h1>
    <p className='Recommended-menu-text'></p>
        <div className='Recommended-menu-list'>
            {Recommended_Menu.map((item,index)=>
            {
              return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Recommended-menu-list-item'>
                      <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
              })}
        </div>
    <hr/>
    </div> */}

// <div className='Category-menu' id='Category-menu'>
//         <h1>
//         All Categories
//         </h1>
//     <p className='Category-menu-text'></p>
//         <div className='Category-menu-list'>
//             {menu_list.map((item,index)=>
//             {
//               return (
//                 <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Category-menu-list-item'>
//                       <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
//                         <p className='H-name'>{item.menu_name}</p>
//                     </div>
//                 )
//               })}
//         </div>
//     <hr/>
//     </div>
// <div className='New-menu' id='New-menu'>
//         <h1>
//         Newely Launched
//         </h1>
//     <p className='New-menu-text'></p>
//         <div className='New-menu-list'>
//             {new_menu.map((item,index)=>
//             {
//               return (
//                 <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='New-menu-list-item'>
//                       <img src={item.image} alt="" />
//                         <p>{item.name}</p>
//                     </div>
//                 )
//               })}
//         </div>
//     </div>
//     <div className='loyal-bottom'>
// <a className='insta' href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="xs" beat/> imperio_restaurant</a>  <a className='phone' href="" target="_blank"><FontAwesomeIcon icon={faPhone} size="2xs" shake/> 080-61525151</a> <a className='insta' href="www.imperiorestaurant.in" target="_blank"><FontAwesomeIcon icon={faGlobe} size="xs" spin /> www.imperiorestaurant.in</a>
// </div>
// </div>

//  )
//  }
// export default Menu

import React from 'react'
import { Link } from 'react-router-dom';

const Menu = ({category,setCategory}) => {
  return (
    <div className='Menu' id='Menu'>
    <div className="Slider">
        <Slider {...settings}>
         {banner.map((item, index) => (
          <div key={index} className="Slider-items">
            <div className="Slider-image">
            <img src={item.image} alt=""/>
            </div>
          </div>
        ))}
      </Slider>
      <div className='Exclusive-menu' id='Exclusive-menu'>
         <h1>
         Exclusively on Imperio
         </h1>
     <p className='Exclusive-menu-text'></p>
         <div className='Exclusive-menu-list'>
            {Exclusive_Menu.map((item,index)=>
            {
              return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Exclusive-menu-list-item'>
                      <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
              })}
        </div>
    <hr/>
    </div>
  
    <div className='Recommended-menu' id='Recommended-menu'>
        <h1>
        Recommended For You
        </h1>
    <p className='Recommended-menu-text'></p>
        <div className='Recommended-menu-list'>
            {Recommended_Menu.map((item,index)=>
            {
              return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Recommended-menu-list-item'>
                  <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
              })}
        </div>
    <hr/>
    </div>

    <div className='Category-menu' id='Category-menu'>
        <h1>
        All Categories
        </h1>
    <p className='Category-menu-text'></p>
        <div className='Category-menu-list'>
            {menu_list.map((item,index)=>
            {
              return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='Category-menu-list-item'>
                     <Link to='CategoryMenu'> <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p className='H-name'>{item.menu_name}</p></Link>
                    </div>
                )
              })}
        </div>
    <hr/>
    </div>

    <div className='New-menu'>
        <h1>
        Newely Launched
        </h1>
    <p className='New-menu-text'></p>
        <div className='New-menu-list'>
            {new_menu.map((item,index)=>
            {
              return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='New-menu-list-item'>
                      <img src={item.image} alt="" />
                        <p>{item.name}</p>
                    </div>
                )
              })}
              </div>
        </div>
        <div className='loyal-bottom'>
        <a className='insta' href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="xs" beat/> imperio_restaurant</a>  <a className='phone' href="" target="_blank"><FontAwesomeIcon icon={faPhone} size="2xs" shake/> 080-61525151</a> <a className='insta' href="www.imperiorestaurant.in" target="_blank"><FontAwesomeIcon icon={faGlobe} size="xs" spin /> www.imperiorestaurant.in</a>
        </div>
  </div>
</div>
)
}

export default Menu
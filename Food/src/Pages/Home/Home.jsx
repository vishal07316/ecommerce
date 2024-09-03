import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Home.css'
import About from '../../Components/About/About'
import logo from '../../assets/frontend_assets/IMPERIO_LOGO.png'
import CardButton from '../../Components/CardButton/CardButton';
import VismeForm1 from '../../Components/Form/Form1';
import VismeForm2 from '../../Components/Form/Form2';
const Home = () => {
  return (
    <div className='Home'>
      <div className='Home-body'>
      <div className='cards'>
        <div className='card'>
          <img className='card-img' src={logo} alt="" />
          <div className='card-body'>
            <h1 className='card-title'>Exclusive Menu</h1>
            <p className='card-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, reiciendis?
              <CardButton className='card-btn'>Order Now</CardButton>
            </p>
          </div>
        </div>
        <div className='card'>
          <img className='card-img' src={logo} alt="" />
          <div className='card-body'>
            <h1 className='card-title'>Recommended</h1>
            <p className='card-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, reiciendis?
              <CardButton className='card-btn'>Order Now</CardButton>
            </p>
          </div>
        </div>
        <div className='card'>
          <img className='card-img' src={logo} alt="" />
          <div className='card-body'>
            <h1 className='card-title'>Category Menu</h1>
            <p className='card-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, reiciendis?
              <CardButton className='card-btn'>Order Now</CardButton>
            </p>
          </div>
        </div>
        <div className='card'>
          <img className='card-img' src={logo} alt="" />
          <div className='card-body'>
            <h1 className='card-title'>Newly Launched</h1>
            <p className='card-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, reiciendis?
              <CardButton className='card-btn'>Order Now</CardButton>
            </p>
          </div>
        </div>
      </div>
      <hr/>
        <div className='About'>
          {/* <h1 className='About-heading'>About</h1> */}
          {/* <p className='About-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facere tempore laboriosam, possimus eligendi esse et, doloribus nulla voluptatum aliquam vel reprehenderit dolor. Necessitatibus optio dignissimos eveniet nesciunt numquam neque repellendus accusantium odio adipisci cum laborum veritatis fugiat vel dolore eligendi, fuga quasi aspernatur ratione provident animi! Eius tenetur voluptas reprehenderit enim velit, officia obcaecati. Eaque similique numquam architecto commodi alias cupiditate. Aperiam incidunt molestias magnam eum eos reprehenderit vel quae reiciendis praesentium sapiente beatae dicta delectus, atque voluptatibus ducimus placeat accusantium in distinctio. Et delectus error consequatur sequi ad aperiam excepturi magni in. Necessitatibus quia cumque quo commodi ipsum. */}
          <About/>
          {/* </p> */}
        </div>
      <hr/>
      </div>
      <div className='Forms'>
      {/* <div className='Form1'> */}
        < VismeForm1 />
      {/* </div> */}
      {/* <div className='Form2'> */}
        <VismeForm2 />
      {/* </div> */}
      </div>  
      <div className='footer'>
        <a className='insta' href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="xs" beat /> imperio_restaurant</a>  <a className='phone' href="" target="_blank"><FontAwesomeIcon icon={faPhone} size="2xs" shake /> 080-61525151</a> <a className='insta' href="www.imperiorestaurant.in" target="_blank"><FontAwesomeIcon icon={faGlobe} size="xs" spin /> www.imperiorestaurant.in</a>
      </div>

    </div>
  )
}

export default Home
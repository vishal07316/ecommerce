// import React from 'react'
// import './Loyalty.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons'; 
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
// import logo from '../../assets/frontend_assets/IMPERIO_LOGO.png'
// import listimg from '../../assets/frontend_assets/gettyimages-1389967036-612x612.jpg'

// const Loyalty = () => {
//     return (
//         < div className='loyal-body'>
//             <img className='loyal-image' src={logo}/>
//             <img className='loyal-image1' src={listimg}/>
//             <img className='loyal-image2' src={listimg}/>
//             <div className='loyal-text'>
//                 <h2 className='loyal-heading'>LOYALTY AND ITS TERMS AND CONDITIONS</h2>
//                 <div className='loyal-bodytext'>
//                 <h2 className='sub-heading'>
//                     Loyalty Program-How It Works
//                 </h2>

// <ul className='list'>
// <h3>
//     Point 1: Earn Cash Back on Every Spend
// </h3>
//   <li>Description: Customers earn 10% cash back on every purchase.</li>

// <h3>
//     Point 2: Redeem Cash Back on Every Spend
// </h3> 

//     <li>Description: Customers have the option to redeem 10% of their total spend as cash back on subsequent visits.</li>

// <h3>
//     Point 3: First-Time Visit Bonus
// </h3>
//     <li>Description: On the first visit, customers provide their mobile number to receive cash back. These initial cash back rewards can be redeemed on their nest visit.</li>

// <h3>
//     Point 4: Second-Time Visit Redemption
// </h3>
//     <li>Description: On the second visit, customers have the ability to redeem the cash back points earned during their first visit.</li>

// <h3>
//     Point 5: OTP Verification for Transactions
// </h3>
//     <li>Description: For security purposes, OTP (One-Time Password) verification is mandatory for every transaction to ensure a secure and authentic process.</li>

// <h3>
//     Point 6: Redemption Limit
// </h3>
//     <li>Description: Customers are allowed to redeem only 10% of their total points on each bill, providing a balance between earning and spending within the loyalty program.</li>
// </ul>

// <h2 className='sub-heading'>
//     Points Structure
// </h2>

// <ul className='list'>

// <li>For every #100 spent, the customer earns 10 points</li>

// <li>Example: If a customer bills for 21000, they will earn 100 points.</li>

// <li>The value of each point is 21,</li>

// <li>Example: For every 100 points camed, the customer can redeem #100</li>

// <li>Point Conversion:</li>

// <li>If a customer spends #500, they will earn 50 points, which are equivalent to 250</li>
// </ul>

// <h2 className='sub-heading'>
// Loyalty Program Terms and Conditions
// </h2>
// <ul className='list'>
// <li>One OTP per Day:</li>

// <li>Customers are allowed to transact using only one OTP per day. Multiple transactions with OTPs on the same day are not permitted.</li>
// </ul>

// <h2 className='sub-heading'>
// Mandatory OTP for Redemption:
// </h2>
// <ul className='list'>
// <li>The One-Time Password (OTP) is a mandatory requirement for redeeming loyalty points. Customers must provide a valid OTP to utilize their points.</li>
// </ul>

// <h2 className='sub-heading'>
// Exclusive Loyalty Offers:
// </h2>
// <ul className='list'>
// <li>Customers participating in the loyalty program cannot combine it with any other affers or discounts. This includes but is not limited to Zomato Pay, Dine Out Easy Dine, Magic Pin. Buffet Quick Lunch, and other ongoing promotions. Loyalty points cannot be used in conjunction with other discounts.</li>
// </ul>

// <h2 className='sub-heading'>
// Visibility on Bill:
// </h2>
// <ul className='list'>
// <li>Loyalty points eamed and redeemed will be clearly visible on the customer's bill. This ensures transparency and keeps customers informed about their loyalty rewards.</li>
// </ul>

// <h2 className='sub-heading'>
// Non-Transferability:
// </h2>
// <ul className='list'>

// <li>
// Loyalty points and benefits are non-transferable and can only be used by the registered customer.
// </li>

// <li>These terms and conditions are designed to ensure a fair and transparent loyalty program for all participants. Any violation of these conditions may result in the forfeiture of loyalty benefits.</li>
// </ul>

// <div className='loyal-bottom'>
// <a className='insta' href="https://www.instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram} size="xs" beat/> imperio_restaurant</a>  <a className='phone' href="" target="_blank"><FontAwesomeIcon icon={faPhone} size="2xs" shake/> 080-61525151</a> <a className='insta' href="www.imperiorestaurant.in" target="_blank"><FontAwesomeIcon icon={faGlobe} size="xs" spin /> www.imperiorestaurant.in</a>
// </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Loyalty

import React, { useEffect, useRef } from 'react';
import './Loyalty.css'; // Ensure you have your styles in a CSS file or use inline styles.
import frontpage from '../../assets/frontend_assets/loyalty(phone).jpg';

const FlipBook = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    const flipBook = (elBook) => {
      elBook.style.setProperty("--c", 0); // Set current page
      elBook.querySelectorAll(".page").forEach((page, idx) => {
        page.style.setProperty("--i", idx);
        page.addEventListener("click", (evt) => {
          if (evt.target.closest("a")) return;
          const curr = evt.target.closest(".back") ? idx : idx + 1;
          elBook.style.setProperty("--c", curr);
        });
      });
    };

    if (bookRef.current) {
      flipBook(bookRef.current);
    }
  }, []);

  return (
    <div className='loyalty'>
        
    <div className="book" ref={bookRef}>
      <div className="page">
        <div className="front cover">
          <img src={frontpage} alt="Cover Back" />
        </div>
        <div className="back">
          <img src={frontpage} alt="Cover Back" />
        </div>
      </div>

      <div className="page">
        <div className="front">
          <p
            style={{
                marginTop: '50px',
                textAlign: 'center',
                fontWeight: 600,
                color: 'orangered',
            }}
            >
    <h2 className='loyal-heading'>LOYALTY AND ITS TERMS AND CONDITIONS</h2>

    <ul className='list'>
<h3>
    Point 1: Earn Cash Back on Every Spend
</h3>
   <li>Description: Customers earn 10% cash back on every purchase.</li>
<h3>

   Point 2: Redeem Cash Back on Every Spend
 </h3> 

<li>Description: Customers have the option to redeem 10% of their total spend as cash back on subsequent visits.</li>

 <h3>
     Point 3: First-Time Visit Bonus
 </h3>
     <li>Description: On the first visit, customers provide their mobile number to receive cash back. These initial cash back rewards can be redeemed on their nest visit.</li>

 <h3>
     Point 4: Second-Time Visit Redemption
 </h3>
     <li>Description: On the second visit, customers have the ability to redeem the cash back points earned during their first visit.</li>

 <h3>
     Point 5: OTP Verification for Transactions
 </h3>
     <li>Description: For security purposes, OTP (One-Time Password) verification is mandatory for every transaction to ensure a secure and authentic process.</li>

 <h3>
     Point 6: Redemption Limit
 </h3>
     <li>Description: Customers are allowed to redeem only 10% of their total points on each bill, providing a balance between earning and spending within the loyalty program.</li>
 </ul>
          </p>

          <div style={{ width: '200px', height: '200px', marginLeft: '60px' }}>
            <img src="img/png.png" alt="Image 1" />
          </div>
          <p style={{ textAlign: 'center' }}>Thank you For Everything💖.</p>
        </div>
        <div className="back">
          <img src="img/WhatsApp Image 2024-08-16 at 8.52.45 PM.jpeg" alt="Img 1" />
        </div>
      </div>

      <div className="page">
        <div className="front">
          <h2>Dear didi, this is for you 🤞💖...</h2>
          <p>
            Having a sister like you is a blessing. You’ve been my protector, confidant, and friend. May this
            Raksha Bandhan bring you all the joy and happiness you deserve. <b>Happy Raksha Bandhan!</b>
          </p>
        </div>
        <div className="back">
          <img src="img/WhatsApp Image 2024-08-16 at 9.16.30 PM.jpeg" alt="Img 2" />
        </div>
      </div>

      <div className="page">
        <div className="front">
          <video src="vid.mp4" controls style={{ width: '260px', height: '280px' }}></video>
          <p>Note: Play the video Before Reading it</p>
          <p>
            Sisters are like angels who lift us to our feet when our wings forget how to fly. On this Raksha
            Bandhan, I want to tell you that I’m always there for you, just like you’ve always been for me. <b>Happy Rakhi, sis!🤞💖</b>
          </p>
        </div>
        <div className="back">
          <img src="img/WhatsApp Image 2024-08-16 at 9.16.29 PM.jpeg" alt="Img 3" />
        </div>
      </div>

      <div className="page">
        <div className="front">
          <p>
            Even though we may not be together today, the bond we share grows stronger with every passing day.
            Sending you lots of love and good wishes this Raksha Bandhan. Miss you, sister!" "To the most amazing
            sister in the world, thank you for all the love, care, and protection you've given me. On this Rakhi,
            I wish you all the happiness and success in the world.
          </p>
          <p>
            Though we may not always be together, the love and connection we have remain strong, no matter the
            distance. Your presence in my life has been a source of strength, joy, and comfort. I cherish every
            moment we’ve spent together and look forward to creating many more memories in the future.🏵️🏵️🏵️
          </p>
        </div>
        <div className="back">
          <p>
            On this Raksha Bandhan, I wish you all the happiness, success, and love in the world. May our bond
            continue to grow stronger with each passing day. Thank you for being not just a sister, but also a
            friend, a confidant, and a guiding light in my life. Happy Raksha Bandhan!
          </p>
        </div>
      </div>

      <div className="page">
        <div className="front">
          <img src="img/WhatsApp Image 2024-08-16 at 8.52.46 PM (1).jpeg" alt="Img 4" />
        </div>
        <div className="back cover"></div>
      </div>
    </div>
    </div>
  );
};

export default FlipBook;

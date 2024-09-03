import React, { useEffect, useRef } from 'react';
import './About.css';
import logo from '../../assets/frontend_assets/IMPERIO_LOGO.png';

const ImageCarousel = () => {
  const dragContainerRef = useRef(null);
  const spinContainerRef = useRef(null);
  const musicContainerRef = useRef(null);

  useEffect(() => {
    const radius = 240;
    const autoRotate = true;
    const rotateSpeed = -60;
    const imgWidth = 120;
    const imgHeight = 170;
    
    const dragContainer = dragContainerRef.current;
    const spinContainer = spinContainerRef.current;
    const aImg = spinContainer.getElementsByTagName('img');
    const aVid = spinContainer.getElementsByTagName('video');
    const aEle = [...aImg, ...aVid];

    spinContainer.style.width = imgWidth + "px";
    spinContainer.style.height = imgHeight + "px";

    const ground = document.getElementById('ground');
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";

    const init = (delayTime) => {
      for (let i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = `rotateY(${i * (360 / aEle.length)}deg) translateZ(${radius}px)`;
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || `${(aEle.length - i) / 4}s`;
      }
    };

    const applyTransform = (obj) => {
      if (tY > 180) tY = 180;
      if (tY < 0) tY = 0;

      obj.style.transform = `rotateX(${-tY}deg) rotateY(${tX}deg)`;
    };

    const playSpin = (yes) => {
      spinContainer.style.animationPlayState = yes ? 'running' : 'paused';
    };

    let sX, sY, nX, nY, desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    if (autoRotate) {
      const animationName = rotateSpeed > 0 ? 'spin' : 'spinRevert';
      spinContainer.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    document.onpointerdown = function (e) {
      clearInterval(dragContainer.timer);
      e = e || window.event;
      sX = e.clientX;
      sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        nX = e.clientX;
        nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTransform(dragContainer);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function () {
        dragContainer.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTransform(dragContainer);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(dragContainer.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      const d = e.wheelDelta / 20 || -e.detail;
      radius += d;
      init(1);
    };

    init(1000);
  }, []);

  return (
      <>
    <div className='about'>
        <h1>About</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit saepe quaerat error, eos expedita consequatur placeat, cumque tenetur rem, debitis vero officia eaque repellendus vel voluptatum labore similique nihil odio sapiente pariatur ullam! Atque accusantium similique eius consequatur aperiam, fuga deserunt ratione ea minima officia omnis nesciunt nisi delectus aspernatur dolorum dignissimos debitis at iure velit voluptates voluptatem hic quas cupiditate. Quis quod nisi sint? Odit quae excepturi exercitationem, quia cupiditate corrupti sequi recusandae autem blanditiis, neque, laborum repellat dignissimos amet vel. Quas dignissimos saepe quam accusamus aliquam magnam. Doloremque totam accusamus laudantium nesciunt nemo aut assumenda illo, necessitatibus vel!</p>
    <div id="drag-container" ref={dragContainerRef}>
      <div id="spin-container" ref={spinContainerRef}>
        <img src={logo} alt="Image 1" />
        <img src={logo} alt="Image 2" />
        <img src={logo} alt="Image 3" />
        <img src={logo} alt="Image 4" />
        <img src={logo} alt="Image 5" />
        <img src={logo} alt="Image 6" />
      </div>
      <div id="ground"></div>
      <div id="music-container" ref={musicContainerRef}></div>
    </div>
    </div>
    </>
  );
};

export default ImageCarousel;

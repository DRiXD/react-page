import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import './slider.css';


const slideImages = [
  './slider_images/Bilgewater.jpg',
  './slider_images/gw2desolation.jpg.jpg',
];

function Slider() {
    return (
        <AwesomeSlider animation="openAnimation" className='slider'>
        <div> <img src="http://cdn30.us1.fansshare.com/image/1920x1080/warhammer-chaos-warior-game-wallpaper-wallpaper-gaming-1132580188.jpg" alt="bold"/> </div>
        <div>2 <img src="https://images-eu.ssl-images-amazon.com/images/I/71kDbxHyB4L.jpg" alt="bold"/> </div>
        <div>3</div>
        <div>4</div>
      </AwesomeSlider>
    );
  }

export default Slider;

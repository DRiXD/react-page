import React from 'react';
import instaIcon from '../icons/instagramIcon.svg';
import './References.css'

function openInsta(){
    window.open('https://www.instagram.com/denisr_20/?hl=de')
}

function References() {
  return (
    <div className='references'>
        <input type='image' src={instaIcon} alt='' onClick={openInsta} />
        <button type='button' className='insta'>denisr_20</button>
    </div>
  );
}

export default References;

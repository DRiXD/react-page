import React from 'react';
import './HoverButton.css';

function HoverButton(props){
    return(
        <div>
            <input type='image' src={props.src} alt='https://www.computerhope.com/jargon/e/error.gif'/>
            <div className='infoContainer'></div>
            <div className='infoText'> {props.text} </div>
        </div>    
    );
}

export default HoverButton;
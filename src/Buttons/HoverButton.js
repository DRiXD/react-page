import React from 'react';
import './HoverButton.css';

function HoverButton(props){
    return(
        <div>
            <input type='image' src={props.src} alt='https://www.computerhope.com/jargon/e/error.gif'/>
            {/* <button img={props.image} >{props.name}</button> */}
            <div> {props.text} </div>
        </div>    
    );
}

export default HoverButton;
import React from 'react';
import './HoverButton.css';

function HoverButton(props){
    return(
            <button>{props.name}</button>
    );
}

export default HoverButton;
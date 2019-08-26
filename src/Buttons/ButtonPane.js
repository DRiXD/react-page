import React from 'react';
import './ButtonPane.css';
import HoverButton from './HoverButton.js';

function ButtonPane(){
    return(
        <div>
        <HoverButton class='dev' name='Dev Button'>Dev</HoverButton>
        <HoverButton class='travel' name='Travel Button'></HoverButton>
        <HoverButton class='film' name='Film Button'></HoverButton>
        <HoverButton class='sport' name='Sport Button'></HoverButton>
        <HoverButton class='scout' name='Scout Button'></HoverButton>
        </div>
    );
}

export default ButtonPane;
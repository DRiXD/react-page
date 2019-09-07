import React from 'react';
import './ButtonPane.css';
import dev from '../icons/buttonIcons/dev.png';
import HoverButton from './HoverButton.js';

function ButtonPane(){
    return(
        <div>
            <HoverButton class='dev' name='Dev Button' src={dev} text='Lorem Ipsum' />
            <HoverButton class='travel' name='Travel Button'  text='ghnj' />
            <HoverButton class='film' name='Film Button'  text='jzg' />
            <HoverButton class='sport' name='Sport Button'  text='gtrd' />
            <HoverButton class='scout' name='Scout Button'  text='ht' />
        </div>
    );
}

export default ButtonPane;
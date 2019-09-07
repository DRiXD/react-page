import React from 'react';
import './ButtonPane.css';
import dev from '../icons/buttonIcons/dev.png';
import HoverButton from './HoverButton.js';

function ButtonPane(){
    return(
        <div>
            <HoverButton class='dev' name='Dev Button' src={dev} text='Lorem Ipsum' />
            <HoverButton class='travel' name='Travel Button' img='' text='ghnj' />
            <HoverButton class='film' name='Film Button' img='' text='jzg' />
            <HoverButton class='sport' name='Sport Button' img='' text='gtrd' />
            <HoverButton class='scout' name='Scout Button' img='' text='ht' />
        </div>
    );
}

export default ButtonPane;
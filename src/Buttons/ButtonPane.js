import React from 'react';
import dev from '../icons/buttonIcons/dev.png';
import HoverButton from './HoverButton.js';

function ButtonPane(){
    return(
        <div>
            <HoverButton className='dev' name='Dev Button' src={dev} text='Lorem Ipsum' />
            <HoverButton className='travel' name='Travel Button'  text='ghnj' />
            <HoverButton className='film' name='Film Button'  text='jzg' />
            <HoverButton className='sport' name='Sport Button'  text='gtrd' />
            <HoverButton className='scout' name='Scout Button'  text='ht' />
        </div>
    );
}

export default ButtonPane;
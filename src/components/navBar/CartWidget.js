import React from 'react';
import carro from '../../img/carro.png';

export default function CartWidget(props){
    return(
            <div>
                <img src={carro} width="28" height="29" alt='carro'/>
           </div>
        );
}


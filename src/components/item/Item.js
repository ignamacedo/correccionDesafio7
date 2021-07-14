import React from 'react';
import ItemCount from './ItemCount';
import star1 from '../../img/star1.webp';

function Item(){
  return(
        <div className='card text-white bg-dark mb-3' style={{width:'18rem'}}>
            <img className='card-img-top' src={star1} alt='Imagen Card Producto'/>
            <div className='card-body'>
                <h5 className='card-title'>Producto 1</h5>
                <p className='card-text'>Descripcion del producto 1</p>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item' style={{textAlign:'center'}}>$500M</li>
            </ul>
            <div className='card-body'>
                <ItemCount 
                    stock={5} 
                    initial={0}
                    />
            </div>
        </div>
    );
}

export default Item;
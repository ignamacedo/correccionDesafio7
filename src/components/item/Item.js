import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ items = [] }) => {
  return(
    <div class="container-fluid">
		
    <div className="row">
        
         {items.lenght === 0 ? 
        <p>LOADING....</p>
        :
        items.map((item,index) => (
            <div className="col">
            <div className='card text-white bg-dark mb-3' style={{width:'18rem',overflow:'hidden'}}>
            <img className='card-img-top' src={item.imgUrl} alt={item.alt} style={{width:'350px',height:'280px'}}/>
            <div className='card-body'>
                <h5 className='card-title'>{item.titulo}</h5>
                <p className='card-text'>{item.descripcion}</p>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item' style={{textAlign:'center'}}>{item.precio}</li>
            </ul>
            <div className='card-body'>
                <ItemCount 
                    stock={item.stock} 
                    initial={item.initial}
                    />
            </div>
        </div>
        </div>
        ))}
    </div>
    </div>
   );
}

export default Item;
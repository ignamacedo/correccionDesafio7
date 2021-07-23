import React, { useEffect, useState } from 'react';
import {ItemList} from './ItemList';
import Item from './Item';

const ItemListContainer = (props) => {

  const [items,setItems] = useState([]);
  
  useEffect(()=>{
    getItems();
  });
  
  const getItems = () => {
    const call = fetch('https://localhost:4000/productos');
    call
    .then(res => {
        //console.log(res);
        return res.json();
    })
    .then(response => setItems(response));
}; 


    return(
    <div>
     <div class="container-fluid">
        <div className="row">
          {(items.length === 0) ? 
            <p>LOADING....</p>
            :
            items.map((item,index) => (
              <Item item={item}/>
            ))
            }
        </div>
      </div>
    </div>
    );
}

export default ItemListContainer;
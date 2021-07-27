import React, { useEffect, useState } from 'react';
import {ItemList} from './ItemList';
import Item from './Item';

const ItemListContainer = (props) => {

  const [items,setItems] = useState([]);

  useEffect(()=>{
    //getItems();
    ItemList().then(res => setItems(res));
  },[]);

 /* const getItems = async() =>{
    let llamada = fetch(`http://localhost:4000/Products`);
    let data = await llamada;
    data = await data.text();
    data = JSON.parse(data);
    setItems(data);
  }*/
  

  //URL params al hacer click en un producto de la lista d eproductos uso URL params para redireccionar
  //y voisualiozar los datos de un producto!
  //http://localhost:4000/product/1
  return(
    <div>
     <div className="container-fluid">
        <div className="row">
          {(items.length === 0) ? 
            <p>LOADING....</p>
            :
            items.map((item) => (
              <Item item={item}/>
            ))
            }
        </div>
      </div>
    </div>
    );
}

export default ItemListContainer;
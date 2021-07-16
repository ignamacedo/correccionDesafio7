import React, { useEffect, useState } from 'react';
import {ItemList} from './ItemList';
import Item from './Item';

const ItemListContainer = (props) => {

    const [items,setItems] = useState([]);

    useEffect(()=>{
      ItemList().then(res => setItems(res));
    },[]);
  
    return(
      <>
        <h1>{props.greeting}</h1>
        <Item items={items}/>
      </>
    );
}

export default ItemListContainer;

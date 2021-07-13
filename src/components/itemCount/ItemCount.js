import React from 'react';
import {useState} from 'react';
import Product from '../product/Product';
import star1 from '../../img/star1.webp';

function ItemCount(){
    const [carr, setCarr] = useState([]); 
    
   const getProducto = (form,producto) => {
        form.preventDefault();
    }

    return(
        <div>
            <Product
                titulo='Producto 1'
                imagen={star1}
                descripcion='Descripcion del producto 1'
                agregarCarro={getProducto}
                precio='$50M'
                />
        </div>
    );
}

export default ItemCount;
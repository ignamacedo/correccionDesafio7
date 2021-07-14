import React from 'react';
import {useState, useEffect} from 'react';

function ItemCount(props){
   
    const stockInit = props.stock;
    const [select, setSelect] = useState(props.initial);
    const [stockDin, setStockDin] = useState(props.stock);

    const onAdd = () =>{
        if(select < stockInit){
            setSelect(select + 1);
            setStockDin(stockDin - 1);
        }
    }

    const onRemove = () =>{
        if(select > 0){
            setSelect(select - 1);
            setStockDin(stockDin + 1);
        }
    }

    return(
        <div>
            <form>
                <input type='number' class='form-control' style={{width:'50%',textAlign:'center'}} disabled value={select}/>
                <button disbaled className='btn btn-secondary' type='button' onClick={() => {
                    onRemove()
                }}> - </button>
                <button className='btn btn-secondary' type='button' onClick={() => {
                    onAdd()
                }}> + </button>
                <button className='btn btn-primary' type='submit'>Agregar al carrito</button>
            </form>
        </div>
    );
}

export default ItemCount;
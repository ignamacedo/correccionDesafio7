import React from 'react';
import {useState} from 'react';

function Product(props){
    
    const [cant, setCant] = useState(0);
  
    return(
        <div className='card text-white bg-dark mb-3' style={{width:'18rem'}}>
            <img className='card-img-top' src={props.imagen} alt='Imagen Card Producto'/>
            <div className='card-body'>
                <h5 className='card-title'>{props.titulo}</h5>
                <p className='card-text'>{props.descripcion}</p>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item' style={{textAlign:'center'}}>{props.precio}</li>
            </ul>
            <div className='card-body'>
                <form onSubmit={(data) => {props.agregarCarro(data,props)}}>
                    <input type='number' class='form-control' style={{width:'50%',textAlign:'center'}} disabled value={cant}/>
                    <button className='btn btn-secondary' type='button' onClick={() => {setCant(cant - 1)}}> - </button>
                    <button className='btn btn-secondary' type='button' onClick={() => {setCant(cant + 1)}}> + </button>
                     
                    <button className='btn btn-primary' type='submit'>Agregar al carrito</button>
                </form>
            </div>
        </div>
    );
}

export default Product;
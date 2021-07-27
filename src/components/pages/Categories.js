import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
//el useParams es un HOOK que se usa para capturar la data que le pasamos

function Categories(props){

    const [productosCategoria, setProductosCategoria] = useState([]);

    //usar nombre exacto que se puso en el router
    const {categoriaID} = useParams;

   /* const getCategoria = async () => {
        let call = fetch(`https://localhost:4000/product/category/${categoriaID}`);
        call = await call;
        call = await call.text();
        setProductosCategoria(JSON.parse(call));
    }*/

    useEffect(()=>{
        //getCategoria();
    },[categoriaID]);

    return(
        <div>
            <h1>Categoria {categoriaID}</h1>
            {productosCategoria.map(e =>{
                return(
                    <Link  to={`/Detalle/${e.id}`} className="nav-link">
                        <p>{e.title}</p>
                    </Link>
                );
            })}
        </div>
    );
}

export default Categories;
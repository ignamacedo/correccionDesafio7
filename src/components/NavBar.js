import react from 'react'; // se llama directamente con react ya que se encuentra dentro de los paquetes modules sin necesidad de referenciar toda la ruta, al apuntar la referencia indica la ruta completa (abrebiaciones de los componentes basicos de los componentes de react
import carro from './carro.png';

//nombre de la funcion siempre en MAYUS
//para que el componente se vea tengo que exportarlo en el componente App.js
export default function NavBar(){ // siempre agregar export a la funcion componente, ya que si lo llamamos y no se exporta no nos va a dejar
    return(
        <div className="nb_conteiner">
           <div className="nb_categorias">
                <ul className="nb_ul">
                    <li className="nb_li">
                        <h3 className="nb_logo">
                            TIENDA E-COMMERCE
                        </h3>
                    </li>
                    <li className="nb_li">
                        <a className="nb_link" href=".">
                            HOME
                        </a>
                    </li>
                    <li className="nb_li">
                        <a className="nb_link" href=".">
                            PRODUCTOS
                        </a>
                    </li>
                    <li class="nb_li">
                        <a className="nb_carro" href=".">
                            <img src={carro} width="27" height="27"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

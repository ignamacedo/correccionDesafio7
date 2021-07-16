import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../navBar/NavBar';
import ItemListContainer from '../item/ItemListContainer';

function Home(){
    return(
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <ItemListContainer 
                    greeting = 'Bienvenidos a Cosmos Store'/>
            </div>
        </div>
        
    );
}

export default Home;
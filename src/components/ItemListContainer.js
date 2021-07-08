import React, { Component } from 'react';

export default class ItemListContainer extends Component{
    constructor(props){
        super(props);
        this.greeting = "Bienvenidos a Cosmos Store";    
    }
    render() { 
        return(
            <div>
                <br/>
                <h2 className="display-5">{this.greeting}</h2>
                <hr className="my-5"/>
            </div>
        );
    }
}
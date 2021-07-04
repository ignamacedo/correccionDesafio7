import React from 'react';

export default function SugarSyntax(){
    
    var array = [5,6,7]; //array declarado

    //BUCLE FOR..OF
    const loopFOROF = () =>{
        let bucleforOF = ``; //array vacio
        for(let index of array){ // por cada indice del array dcelaradio, itera hasta el final
            bucleforOF += `${i}`;
        }
        return bucleforOF;
    }

    //TERNARIO
    const ternbary = (boolean) => { //llega un booleano
        let result;
        boolean ? result = `${boolean}` : result = `${boolean}` //guardo valor en variable result dependiendo si es true o false
        return result;
    }

    //SEPEAD...
    const spreadOperator = () =>{
        //agregar un item al array
        let newElement = 10;
        let array2 = [...array,newElement];
        //pusheo un elemento en el array declarado eb un array nuevo
        retrun `${array2}`;
    }

    //.filter(condicion)
    const filter = () =>{
        //pasa datos de un array a otro, pero filtrando por la condicion
        const words = ['spray', 'item', 'elite', 'exuberant', 'destruction', 'present'];
        //guardo los datos del array words en el array resukt simepre y cuendo cumpla que la palabra sea mayor a 6 caracteres
        //declara variable word para usarla como cada elemento
        const result = words.filter(word => word.length > 6);
        return `${result}`;
    }
}
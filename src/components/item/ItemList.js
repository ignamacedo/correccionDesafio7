export const ItemList = () =>{
    const data = [
        {id: 1, titulo: 'Producto 1', descripcion: 'Descripcion 1', precio:'$500M', stock:5, initial:0, alt:'Imagen Producto 1', imgUrl:''},
        {id: 2, titulo: 'Producto 2', descripcion: 'Descripcion 2', precio:'$800M', stock:3, initial:0, alt:'Imagen Producto 2', imgUrl:''},
        {id: 3, titulo: 'Producto 3', descripcion: 'Descripcion 3', precio:'$70M', stock:12, initial:0, alt:'Imagen Producto 3', imgUrl:''},
        {id: 4, titulo: 'Producto 4', descripcion: 'Descripcion 4', precio:'$250M', stock:8, initial:0, alt:'Imagen Producto 4', imgUrl:''},
        {id: 5, titulo: 'Producto 5', descripcion: 'Descripcion 5', precio:'$1000M', stock:2, initial:0, alt:'Imagen Producto 5', imgUrl:''}
    ];

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(data);
        },2000);
    });
};
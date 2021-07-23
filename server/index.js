const express = require('express')
const fs = require('fs');
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors());
app.get('/productos', (req, res) => {
    var json = fs.readFileSync('./list.json',"utf8",(err,content) =>{
        if (err) {
            console.log(err);
        } else {
            //JSON.parse(content);
            JSON.stringify(content.toString());
        }
    });
    console.log(json);
    res.send(json)
    

   // res.send(json);
    //res.send(JSON.stringify(data));

})
app.get('/producto/:id', (req,res) => {
    let id = req.params.id;
    console.log(req.params.id); 
   // id = id.substring(1);
    console.log(id);
   var json = fs.readFileSync('./list.json',"utf8",(err,content) =>{
       err ? console.log(err):JSON.parse(content);
    });

    json = JSON.parse(json);
    json = json.filter(filter => filter.id == id);
    console.log(json);
    res.send(json);

})
app.get('/producto/categoria/:categoryID', (req,res) => {
    console.log('estamos Seleccion de categorias');
    let categoria = req.params.categoryID;
    //categoria = id.substring(1);
    console.log(categoria);
   var json = fs.readFileSync('./list.json',"utf8",(err,content) =>{
       err ? console.log(err):JSON.parse(content);
    });

    json = JSON.parse(json);
    json = json.filter(filter => filter.categoria == categoria);
    console.log(json);
    res.send(json);

})
app.listen(port, () => console.log(`Example app listening on ${port} port!`))

const express = require('express')
const app = express();
const path = require('path');
//para que pueda entender los datos del formulario 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./router/index'));
//volver publica la carpeta 
app.use(express.static(path.join(__dirname,'public')));

app.listen(3500, () =>{
    console.log("server on port 3500");
})
const express = require('express') //Importar el paquete express 
const app = express()
const hbs = require('hbs')
const port = 8282 //Definir el puerto

//Servidor de contenido estático
app.use(express.static('public'));

//Motor de plantillas
hbs.registerPartials(__dirname + '/public/views/partials', function(err){});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');

app.get('/',(req,res) =>{
    // res.send('Hola mundo')
    res.render('catalogo',{
        nombre: 'Catálogo de Productos'
    })
})

// app.get('/registrarPedido',(req,res) =>{
//     res.sendFile(__dirname + '/public/views/registrarPedido.html')
// })

app.get('/formUsuarios',(req,res) =>{
    res.sendFile(__dirname + '/public/views/formUsuarios.hbs')
})

app.get('*',(req,res) =>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,() =>{
    console.log(`Escuchando por el puerto ${port}`)
})
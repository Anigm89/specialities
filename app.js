
const {filtrar,usuariosData, mostrar } = require('./datos.js'); 

const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('<h1> home</h1><br><a href = "/marketing">Marketing</a><a href = "/desarrolladores">Desarrolladores</a><a href = "/ventas">Ventas</a><a href = "/QAs">QAs</a><a href = "/otros">Otros</a>')
});
app.get('/marketing', (req, res) =>{
    const usuariosfiltrados0 = filtrar(usuariosData, 'marketing');
    let datos = mostrar(usuariosfiltrados0);
   
       res.send( `
       <!DOCTYPE html>
           <html lang="es">
               <head>
                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
                   <title>Marketing</title>
               </head>
               <body>
                   <h1>Marketing</h1><br>
                   <a href = "/">Home</a>
                   <a href = "/desarrolladores">Desarrolladores</a>
                   <a href = "/ventas">Ventas</a>
                   <a href = "/QAs">QAs</a><br>
                       <p>Nº usuarios:${usuariosfiltrados0.length} </p>
                        ${datos}
               </body>
           </html>
      `)
});
app.get('/desarrolladores', (req, res) =>{
    const usuariosfiltrados1 = filtrar(usuariosData, 'desarrolladores');
    let datos = mostrar(usuariosfiltrados1);
   
       res.send( `
       <!DOCTYPE html>
           <html lang="es">
               <head>
                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
                   <title>Desarrolladores</title>
               </head>
               <body>
                   <h1>Desarrolladores</h1><br>
                   <a href = "/">Home</a>
                   <a href = "/marketing">Marketing</a>
                   <a href = "/ventas">Ventas</a>
                   <a href = "/QAs">QAs</a><br>
                       <p>Nº usuarios:${usuariosfiltrados1.length} </p>
                        ${datos}
               </body>
           </html>
      `)
})
app.get('/ventas', (req, res) =>{
    const usuariosfiltrados2 = filtrar(usuariosData, 'ventas');
    let datos = mostrar(usuariosfiltrados2);
   
       res.send( `
       <!DOCTYPE html>
           <html lang="es">
               <head>
                   <meta name="viewport" content="width=device-width, initial-scale=1.0">
                   <title>Ventas</title>
               </head>
               <body>
                   <h1>Ventas</h1><br>
                   <a href = "/">Home</a>
                   <a href = "/marketing">Marketing</a>
                   <a href = "/desarrolladores">Desarrolladores</a>
                   <a href = "/QAs">QAs</a><br>
                       <p>Nº usuarios:${usuariosfiltrados2.length} </p>
                        ${datos}
               </body>
           </html>
      `)
});
app.get('/QAs', (req, res) =>{
    const usuariosfiltrados3 = filtrar(usuariosData, 'QAs');
 // console.log('Usuarios:', usuariosfiltrados);
    let datos = mostrar(usuariosfiltrados3);

    res.send( `
    <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>QSs</title>
            </head>
            <body>
                <h1>QAs</h1><br>
                <a href = "/">Home</a>
                <a href = "/marketing">Marketing</a>
                <a href = "/desarrolladores">Desarrolladores</a>
                <a href = "/ventas">Ventas</a><br>
                    <p>Nº usuarios:${usuariosfiltrados3.length} </p>
                     ${datos}
            </body>
        </html>
`
    )
});

app.use((req,res) =>{
    res.status(404).send('<h1> Página no encontrada</h1><a href = "/">Home</a>')
})

app.listen(3000, () =>{
    console.log('Node está escuchando en el puerto 3000')
    console.log(`http://localhost:3000`)
})





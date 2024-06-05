//sin modular, todo en el mismo archivo.js

const express = require('express');
const app = express();

console.log('hola')

const usuariosData = [ 
    { id: 1, nombre: 'Alice', edad: 28, especialidad: 'marketing' }, 
    { id: 2, nombre: 'Bob', edad: 35, especialidad: 'desarrolladores' }, 
    { id: 3, nombre: 'Charlie', edad: 30, especialidad: 'desarrolladores' },
    { id: 4, nombre: 'David', edad: 25, especialidad: 'QAs' }, 
    { id: 5, nombre: ' Emma', edad: 32, especialidad: 'ventas' }, 
    { id: 6, nombre: 'Frank', edad: 28, especialidad: 'marketing' }, 
    { id: 7, nombre: 'Grace', edad: 34 , especialidad: 'desarrolladores' },
    { id: 8, nombre: 'Hank', edad: 27, especialidad: 'QAs' }, 
    { id: 9, nombre: 'Ivy', edad: 31, especialidad: 'ventas' }, 
    { id: 10, nombre: 'Jack', edad: 29, especialidad: 'marketing' }, 
    { id: 11, nombre: 'Karen', edad: 36, especialidad: 'desarrolladores' }, 
    { id: 12, nombre: 'Leo', edad: 26, especialidad: 'QAs' }, 
    { id: 13, nombre: 'Mia', edad: 33, especialidad: 'ventas' }, 
    { id: 14, nombre: 'Nathan' , edad: 30, especialidad: 'marketing' }, 
    { id: 15, nombre: 'Olivia', edad: 37, especialidad: 'desarrolladores' }, 
    { id: 16, nombre: 'Paul', edad: 24, especialidad : 'QAs' }, 
    { id: 17, nombre: 'Quinn', edad: 32, especialidad: 'ventas' }, 
    { id: 18, nombre: 'Ryan', edad: 28, especialidad: 'marketing' }, 
    { id: 19, nombre: 'Sara', edad: 35, especialidad: 'desarrolladores' }, 
    { id: 20, nombre: 'Tom', edad: 29, especialidad: 'QAs' }, 
    { id: 21, nombre: 'Uma', edad: 30, especialidad: 'ventas' },
    { id: 22, nombre: 'Victor', edad: 27, especialidad: 'marketing' }, 
    { id: 23, nombre: 'Wendy', edad : 34, especialidad: 'desarrolladores' }, 
    { id: 24, nombre: 'Xander', edad: 31, especialidad: 'QAs' }, 
    { id: 25, nombre: 'Yara', edad: 33, especialidad: 'ventas' }, 
    { id: 26, nombre: 'Zack', edad: 28, especialidad: 'marketing' }, 
    { id: 27, nombre: 'Ava', edad: 36, especialidad: 'desarrolladores' }, 
    { id: 28, nombre: 'Bryan', edad: 26, especialidad: 'QAs' }, 
    { id: 29, nombre: 'Cynthia', edad: 32, especialidad: 'ventas' }, 
    { id: 30, nombre: 'Derek', edad: 30, especialidad: 'marketing' }
 ];


const filtrar = (especialidad) =>{
    return usuariosData.filter(user => user.especialidad === especialidad)
}
 //console.log(filtrar('marketing'))

 function template(especialidad){
    const usuarios = filtrar(especialidad);
    return `
    <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Marketing</title>
            </head>
            <body>
                <h1>${especialidad}</h1><br>
                <a href = "/">Home</a>
                <a href = "/desarrolladores">Desarrolladores</a>
                <a href = "/ventas">Ventas</a>
                <a href = "/QAs">QAs</a><br>
                <p>Nº usuarios:${usuarios.length} </p>
                <ul>
                ${usuarios.map(user =>`<li>${user.nombre} - Edad:${user.edad} </li>`).join('')}
                </ul>
                 
            </body>
        </html>
   `
 }

 app.get('/', (req, res) =>{
    res.send('<h1> home</h1><br><a href = "/marketing">Marketing</a><a href = "/desarrolladores">Desarrolladores</a><a href = "/ventas">Ventas</a><a href = "/QAs">QAs</a><a href = "/otros">Otros</a>')
});


app.get('/marketing', (req, res) =>{
    const especialidad =  'marketing';
    res.send(template(especialidad))
})

app.get('/desarrolladores', (req, res) =>{
    const especialidad =  'desarrolladores';
    res.send(template(especialidad))
})

app.get('/ventas', (req, res) =>{
    const especialidad =  'ventas';
    res.send(template(especialidad))
})

app.get('/QAs', (req, res) =>{
    const especialidad =  'QAs';
    res.send(template(especialidad))
})

app.use((req,res) =>{
    res.status(404).send('<h1> Página no encontrada</h1><a href = "/">Home</a>')
})


 app.listen(3000, () =>{
    console.log('Express está escuchando en el puerto 3000')
    console.log(`http://localhost:3000`)
})
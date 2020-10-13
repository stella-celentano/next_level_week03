import express from 'express';

const app = express();

// rota = conjunto 
// recurso = usuario

// métodos HTTP = GET, POST, PUT, DELETE
// parâmetros 

app.get('/users', () => {
    console.log('teste')
})

app.listen(3333)
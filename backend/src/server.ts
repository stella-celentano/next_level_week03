import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// rota = conjunto 
// recurso = usuario

// métodos HTTP = GET, POST, PUT, DELETE
// parâmetros 

app.listen(3333);


// Diver Nativo: permite a genet executar as querys do banco de dados mas ele não oferece nenhum tipo de abstração,
// escreve toda a query assim como no bd

// Query Builder: é um construtor de querys, escreve as querys com JS, é um outro nível de abstração das querys e 
// no final ele converte para a query que o bd entende

// ORM: é o terceiro nível de abstração, maior possível, vai ter uma classe JS que simboliza um tabela do banco de dados
// toda vez que faz select no banco, cada linha de retorno vai ser uma instância dentro da classe
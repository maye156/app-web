import express from 'express';
import  rutas  from './routes/book_routes.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());
app.use(rutas);


export default app;
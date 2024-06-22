import express from 'express'
import bodyParser from 'body-parser'
import animeRoutes from './routes/anime'

export const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
});

app.use('/anime', animeRoutes);


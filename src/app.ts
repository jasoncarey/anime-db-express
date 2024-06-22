import express from 'express'
import bodyParser from 'body-parser'
import animeRoutes from './routes/anime'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import protectedRoutes from './routes/protected'

export const app = express();

app.use(bodyParser.json());

app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    next();
});

app.use('/anime', animeRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);


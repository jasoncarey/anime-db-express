import { createServer } from 'http';
import { app } from './app';
import { sequelize } from './sequelize';

const port = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.sync({ alter: true });
        console.info('Database synchronized');
        
        createServer(app).listen(port, () => {
            console.info(`Server running on port ${port}`);
        });
} catch (error) {
    console.error('Unable to connect to the database', error);
}
})();

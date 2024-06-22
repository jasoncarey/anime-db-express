import { syncDatabase } from "./models";

syncDatabase().then(() => {
    console.log('Database synced');
}).catch((error) => {
    console.error('Error syncing database:', error);
});


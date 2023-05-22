import { config } from 'dotenv';
config();
import express from 'express';
import cors from 'cors';
import router from './routes.js';
import sequelize from './db.js';
import errorHandler from './middlewares/ErrorHandlingMiddleware.js';
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(express.static('./src/images'));
app.use(errorHandler);
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    sequelize.authenticate();
    sequelize.sync()
        .then(() => {
        console.log('Connection has been established successfully.');
    })
        .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
});
//# sourceMappingURL=main.js.map
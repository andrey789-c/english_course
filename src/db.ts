import {Sequelize} from 'sequelize'
import * as dotenv from 'dotenv'
import { ProcessEnvOptions } from 'child_process'
dotenv.config()

const {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} = process.env


const sequelize = new Sequelize(DB_NAME! , DB_USER!, DB_PASSWORD, {
  dialect: 'postgres',
  host: DB_HOST!,
});



export default sequelize
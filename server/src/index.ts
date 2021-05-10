import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { createConnection } from 'typeorm';

import generateData from '../scripts/generateData';

dotenv.config();

const connection = createConnection();

connection.then((conn) => generateData(conn));

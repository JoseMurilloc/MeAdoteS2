import pgp from 'pg-promise'
import { configDatabase } from '../config/database';

const createConnectWithConfig = pgp()

const db = createConnectWithConfig(configDatabase);

export default db;

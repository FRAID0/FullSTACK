import {Client} from 'pg';

const client = new Client( {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
    database: "postgres"
}
);

export default client;
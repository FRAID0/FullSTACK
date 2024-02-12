import {CHAR, FLOAT, INTEGER } from 'sequelize';

const customer = {
    id: INTEGER,
    name: CHAR(35),
    address: CHAR(40),
    phone: CHAR(15),
    acctbal: FLOAT,
    comment: CHAR(117)
}

export default customer;


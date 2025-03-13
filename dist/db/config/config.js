"use strict";
// import { Dialect } from 'sequelize';
Object.defineProperty(exports, "__esModule", { value: true });
// Add `?sslmode=require` to ensure SSL is enabled
const DATABASE_URL = "postgresql://restaurant_user:TGX32vYvz2g8ChhVpGhb0yJVOu6Plt9F@dpg-cv9as58gph6c73ak56tg-a.oregon-postgres.render.com/restaurent_1pqc?sslmode=require";
const config = {
    development: {
        url: DATABASE_URL,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false, // Set this to false if your certificate is self-signed
            },
        },
    },
    test: {
        url: DATABASE_URL,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
    production: {
        url: DATABASE_URL,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    },
};
module.exports = config;

"use strict";
// import { Dialect } from 'sequelize';
Object.defineProperty(exports, "__esModule", { value: true });
// Replace this with your actual Render Database URL
const DATABASE_URL = "postgresql://restaurant_user:TGX32vYvz2g8ChhVpGhb0yJVOu6Plt9F@dpg-cv9as58gph6c73ak56tg-a.oregon-postgres.render.com/restaurent_1pqc";
const config = {
    development: {
        url: DATABASE_URL,
        dialect: 'postgres',
    },
    test: {
        url: DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: DATABASE_URL,
        dialect: 'postgres',
    },
};
module.exports = config;

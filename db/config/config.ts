// import { Dialect } from 'sequelize';

// interface DBConfig {
//   username: string;
//   password: string | null;
//   database: string;
//   host: string;
//   dialect: Dialect;
// }

// interface Config {
//   development: DBConfig;
//   test: DBConfig;
//   production: DBConfig;
// }

// // Define database configurations
// const config: Config = {
//   development: {
//     username: 'postgres',
//     password: `1234@4321`,
//     database: 'restaurent',
//     host: '127.0.0.1',
//     dialect: 'postgres',
//   },
//   test: {
//     username: 'postgres',
//     password: '1234@4321',
//     database: 'restaurent',
//     host: '127.0.0.1',
//     dialect: 'postgres',
//   },
//   production: {
//     username: 'postgres',
//     password: '1234@4321',
//     database: 'restaurent',
//     host: '127.0.0.1',
//     dialect: 'postgres',
//   },
// };

// // Export the config object
// // export default config;

// module.exports = config;


import { Dialect } from 'sequelize';

interface DBConfig {
  url: string;
  dialect: Dialect;
}

interface Config {
  development: DBConfig;
  test: DBConfig;
  production: DBConfig;
}

// Replace this with your actual Render Database URL
const DATABASE_URL = "postgresql://restaurant_user:TGX32vYvz2g8ChhVpGhb0yJVOu6Plt9F@dpg-cv9as58gph6c73ak56tg-a.oregon-postgres.render.com/restaurent_1pqc";

const config: Config = {
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

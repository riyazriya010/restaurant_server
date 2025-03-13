"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const restaurant_1 = __importDefault(require("./restaurant")); // Import the Restaurant model
const configData = require('../config/config');
// Determine the environment
const env = process.env.NODE_ENV || 'development';
const config = configData[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
    sequelize = new sequelize_1.Sequelize(process.env[config.use_env_variable], config);
}
else {
    sequelize = new sequelize_1.Sequelize(config.database, config.username, config.password, config);
}
// Load the Restaurant model
const models = [restaurant_1.default];
models.forEach((model) => {
    const initializedModel = model(sequelize, sequelize_1.DataTypes);
    db[initializedModel.name] = initializedModel;
});
// Setup associations if available
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = sequelize_1.Sequelize;
exports.default = db;
// import { Sequelize, DataTypes } from "sequelize";
// import fs from "fs";
// import path from "path";
// // Import database config
// const config = require("../config/config"); // Use require since it's a JS file
// const development = config.development; // Load development config
// const basename = path.basename(__filename);
// const db: { [key: string]: any; sequelize?: Sequelize; Sequelize?: typeof Sequelize } = {};
// // Initialize Sequelize connection
// const sequelize = new Sequelize(
//   development.database,
//   development.username,
//   development.password ?? undefined, // Converts null to undefined
//   {
//     host: development.host,
//     dialect: development.dialect,
//     logging: console.log, // Set to false if you don't want logs
//   }
// );
// // Function to connect to the database
// const connectToDatabase = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("✅ Database connection has been established successfully.");
//   } catch (error) {
//     console.error("❌ Unable to connect to the database:", error);
//   }
// };
// // Connect to the database
// connectToDatabase();
// // Dynamically import all models
// const modelFiles = fs
//   .readdirSync(__dirname)
//   .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.endsWith(".ts"));
//   const importModels = async () => {
//     for (const file of modelFiles) {
//         const modelModule = await import(path.join(__dirname, file));
//         const model = modelModule.default(sequelize, DataTypes);
//         db[model.name] = model;
//     }
//     // Associate models if they have an `associate` method
//     Object.keys(db).forEach((modelName) => {
//         if (db[modelName].associate) {
//             db[modelName].associate(db);
//         }
//     });
//     console.log("✅ All models loaded successfully.");
//     console.log("📌 Loaded models:", Object.keys(db)); // ✅ Debugging log
// };
// // Load models
// importModels().catch((error) => {
//   console.error("❌ Error loading models:", error);
// });
// // Export the database connection and models
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// export default db;

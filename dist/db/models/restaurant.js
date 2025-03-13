"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize, DataTypes) => {
    class Restaurant extends sequelize_1.Model {
    }
    Restaurant.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        contact: {
            type: DataTypes.STRING(15),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: "restaurants",
        modelName: "Restaurant",
        timestamps: true,
    });
    return Restaurant;
};
// import { Model, DataTypes, Sequelize } from "sequelize";
// interface RestaurantAttributes {
//   id?: number;
//   name: string;
//   contact: string;
//   address: string;
// }
// export class Restaurant extends Model<RestaurantAttributes> implements RestaurantAttributes {
//   public id!: number;
//   public name!: string;
//   public contact!: string;
//   public address!: string;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }
// export default (sequelize: Sequelize) => {
//   Restaurant.init(
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//       },
//       name: {
//         type: DataTypes.STRING(128),
//         allowNull: false,
//       },
//       contact: {
//         type: DataTypes.STRING(15),
//         allowNull: false,
//       },
//       address: {
//         type: DataTypes.STRING(255),
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       tableName: "restaurants",
//       modelName: "Restaurant", // ✅ Correct model name
//       timestamps: true,
//     }
//   );
//   return Restaurant;
// };

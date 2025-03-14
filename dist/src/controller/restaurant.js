"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantController = void 0;
const models_1 = __importDefault(require("../../db/models")); // Ensure correct import
const console_1 = require("console");
const sequelize_1 = require("sequelize");
class RestaurantController {
    createRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                console.log("Received Data:", data);
                console.log("Loaded Models:", Object.keys(models_1.default));
                if (!models_1.default.Restaurant) {
                    throw new Error("Restaurant model is not initialized.");
                }
                const existData = yield models_1.default.Restaurant.findOne({ where: { name: data.name } });
                if (existData) {
                    return res.status(403).json({
                        success: false,
                        message: "Restaurant Name Already Exist!!",
                    });
                }
                const response = yield models_1.default.Restaurant.create(data);
                return res.status(201).json({
                    success: true,
                    message: "Restaurant created successfully!",
                    data: response,
                });
            }
            catch (error) {
                console.error("Create controller error :::", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                    error: error.message,
                });
            }
        });
    }
    //Get ALL Restaurent
    getAllRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield models_1.default.Restaurant.findAll({
                    order: [
                        ['id', 'DESC'],
                    ],
                });
                return res.status(201).json({
                    success: true,
                    message: "Restaurant all got it successfully!",
                    data: response,
                });
            }
            catch (error) {
                console.error("Create controller error :::", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                    error: error.message,
                });
            }
        });
    }
    //Find By Id
    getRestaurantById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params; // Get ID from request params
                const restaurant = yield models_1.default.Restaurant.findByPk(id); // ✅ Find by Primary Key
                if (!restaurant) {
                    return res.status(404).json({
                        success: false,
                        message: "Restaurant not found!",
                    });
                }
                return res.status(200).json({
                    success: true,
                    message: "Restaurant fetched successfully!",
                    data: restaurant,
                });
            }
            catch (error) {
                console.error("Get by ID error :::", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                    error: error.message,
                });
            }
        });
    }
    //Find By Id and Update
    updateRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                console.log('id ', id);
                const { name, contact, address } = req.body;
                console.log('data ', req.body);
                const existData = yield models_1.default.Restaurant.findOne({
                    where: {
                        name,
                        id: { [sequelize_1.Op.ne]: id }
                    },
                });
                if (existData) {
                    return res.status(403).json({
                        success: false,
                        message: "Restaurant Name Already Exist!!",
                    });
                }
                const [updatedRows] = yield models_1.default.Restaurant.update({ name, contact, address }, { where: { id } });
                if (updatedRows === 0) {
                    // return res.status(404).json({
                    //     success: false,
                    //     message: "Restaurant not found or no changes made!",
                    // });
                    throw console_1.error;
                }
                const updatedRestaurant = yield models_1.default.Restaurant.findByPk(id);
                return res.status(200).json({
                    success: true,
                    message: "Restaurant updated successfully!",
                    data: updatedRestaurant,
                });
            }
            catch (error) {
                console.error("update by ID error :::", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                    error: error.message,
                });
            }
        });
    }
    deleteData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.query;
                console.log('id ', id);
                const restaurant = yield models_1.default.Restaurant.findByPk(id);
                if (!restaurant) {
                    return res.status(404).json({ success: false, message: "Restaurant not found" });
                }
                console.log('restaurant ', restaurant);
                const deleteData = yield models_1.default.Restaurant.destroy({ where: { id }, force: true });
                return res.status(200).json({
                    success: true,
                    message: "Restaurant Deleted successfully!",
                    data: deleteData,
                });
            }
            catch (error) {
                console.error("Delete by ID error :::", error);
                return res.status(500).json({
                    success: false,
                    message: "Internal server error",
                    error: error.message,
                });
            }
        });
    }
}
exports.default = RestaurantController;
exports.restaurantController = new RestaurantController();

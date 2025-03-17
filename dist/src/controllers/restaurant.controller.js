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
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantController = void 0;
const restaurant_services_1 = require("../services/restaurant.services");
class RestaurantController {
    constructor(restaurantServices) {
        this.restaurantServices = restaurantServices;
    }
    createRestaurant(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const response = yield this.restaurantServices.createRestaurant(data);
                return res.status(201).json({
                    success: true,
                    message: "Restaurant created successfully!",
                    data: response,
                });
            }
            catch (error) {
                console.error("Create controller error :::", error);
                console.error("error Name :::", error.name);
                if (error && error.name === 'RestaurantAlreadyExist') {
                    return res.status(403).json({
                        success: false,
                        message: "Restaurant Name Already Exist!!",
                    });
                }
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
                const response = yield this.restaurantServices.getAllRestaurant();
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
                const restaurant = yield this.restaurantServices.getRestaurantById(id);
                return res.status(200).json({
                    success: true,
                    message: "Restaurant fetched successfully!",
                    data: restaurant,
                });
            }
            catch (error) {
                console.error("Get by ID error :::", error);
                if (error && error.name === 'RestaurantNotExist') {
                    return res.status(404).json({
                        success: false,
                        message: "Restaurant not found!",
                    });
                }
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
                const { name, contact, address } = req.body;
                const response = yield this.restaurantServices.updateRestaurant(String(id), { name, contact, address });
                return res.status(200).json({
                    success: true,
                    message: "Restaurant updated successfully!",
                    data: response,
                });
            }
            catch (error) {
                console.error("update by ID error :::", error);
                if (error && error.name === 'RestaurantAlreadyExist') {
                    return res.status(403).json({
                        success: false,
                        message: "Restaurant Name Already Exist!!",
                    });
                }
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
                const deleteData = yield this.restaurantServices.deleteData(String(id));
                return res.status(200).json({
                    success: true,
                    message: "Restaurant Deleted successfully!",
                    data: deleteData,
                });
            }
            catch (error) {
                console.error("Delete by ID error :::", error);
                if (error && error.name === 'RestaurantNotExist') {
                    return res.status(404).json({ success: false, message: "Restaurant not found" });
                }
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
exports.restaurantController = new RestaurantController(restaurant_services_1.restaurantServices);

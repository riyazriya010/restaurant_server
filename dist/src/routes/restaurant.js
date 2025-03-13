"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_1 = require("../controller/restaurant");
const router = (0, express_1.Router)();
// Define routes for user operations
router.post("/create/restaurant", restaurant_1.restaurantController.createRestaurant.bind(restaurant_1.restaurantController));
router.get("/getAll/restaurant", restaurant_1.restaurantController.getAllRestaurant.bind(restaurant_1.restaurantController));
router.get("/get/restaurant/:id", restaurant_1.restaurantController.getRestaurantById.bind(restaurant_1.restaurantController));
router.patch("/update/restaurant", restaurant_1.restaurantController.updateRestaurant.bind(restaurant_1.restaurantController));
const restaurantRoutes = router;
exports.default = restaurantRoutes;

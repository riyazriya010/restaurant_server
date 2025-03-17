"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restaurant_controller_1 = require("../controllers/restaurant.controller");
const router = (0, express_1.Router)();
router.post("/create/restaurant", restaurant_controller_1.restaurantController.createRestaurant.bind(restaurant_controller_1.restaurantController));
router.get("/getAll/restaurant", restaurant_controller_1.restaurantController.getAllRestaurant.bind(restaurant_controller_1.restaurantController));
router.get("/get/restaurant/:id", restaurant_controller_1.restaurantController.getRestaurantById.bind(restaurant_controller_1.restaurantController));
router.patch("/update/restaurant", restaurant_controller_1.restaurantController.updateRestaurant.bind(restaurant_controller_1.restaurantController));
router.delete('/delete/restaurant', restaurant_controller_1.restaurantController.deleteData.bind(restaurant_controller_1.restaurantController));
const restaurantRoutes = router;
exports.default = restaurantRoutes;
// import { Router } from "express";
// import { restaurantController } from "../controllers/controller";
// const router = Router();
// // Define routes for user operations
// router.post("/create/restaurant", restaurantController.createRestaurant.bind(restaurantController));
// router.get("/getAll/restaurant", restaurantController.getAllRestaurant.bind(restaurantController));
// router.get("/get/restaurant/:id", restaurantController.getRestaurantById.bind(restaurantController));
// router.patch("/update/restaurant", restaurantController.updateRestaurant.bind(restaurantController));
// router.delete('/delete/restaurant', restaurantController.deleteData.bind(restaurantController));
// const restaurantRoutes = router
// export default restaurantRoutes;

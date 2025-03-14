import { Router } from "express";
import { restaurantController } from "../controller/restaurant";

const router = Router();

// Define routes for user operations
router.post("/create/restaurant", restaurantController.createRestaurant.bind(restaurantController));
router.get("/getAll/restaurant", restaurantController.getAllRestaurant.bind(restaurantController));
router.get("/get/restaurant/:id", restaurantController.getRestaurantById.bind(restaurantController));
router.patch("/update/restaurant", restaurantController.updateRestaurant.bind(restaurantController));
router.delete('/delete/restaurant', restaurantController.deleteData.bind(restaurantController));


const restaurantRoutes = router
export default restaurantRoutes;
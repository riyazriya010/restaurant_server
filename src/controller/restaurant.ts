import { Request, Response } from "express";
import db from "../../db/models"; // Ensure correct import
import { error } from "console";

export default class RestaurantController {
    async createRestaurant(req: Request, res: Response): Promise<any> {
        try {
            const data = req.body;
            console.log("Received Data:", data);

            // Debugging: Check if db.Restaurant exists
            console.log("Loaded Models:", Object.keys(db));

            // Check if the Restaurant model is available
            if (!db.Restaurant) {
                throw new Error("Restaurant model is not initialized.");
            }

            // Create restaurant entry in the database
            const response = await db.Restaurant.create(data);

            return res.status(201).json({
                success: true,
                message: "Restaurant created successfully!",
                data: response,
            });
        } catch (error: any) {
            console.error("Create controller error :::", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }


    //Get ALL Restaurent
    async getAllRestaurant(req: Request, res: Response): Promise<any> {
        try {
            const response = await db.Restaurant.findAll()
            return res.status(201).json({
                success: true,
                message: "Restaurant all got it successfully!",
                data: response,
            });
        } catch (error: any) {
            console.error("Create controller error :::", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }

    //Find By Id
    async getRestaurantById(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params; // Get ID from request params

            const restaurant = await db.Restaurant.findByPk(id); // ✅ Find by Primary Key

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

        } catch (error: any) {
            console.error("Get by ID error :::", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }


    //Find By Id and Update
    async updateRestaurant(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.query
            console.log('id ',id)
            const { name, contact, address } = req.body;
            console.log('data ',req.body)
            const [updatedRows] = await db.Restaurant.update(
                { name, contact, address },
                { where: { id } }
            )

            if (updatedRows === 0) {
                // return res.status(404).json({
                //     success: false,
                //     message: "Restaurant not found or no changes made!",
                // });
                throw error
            }


            const updatedRestaurant = await db.Restaurant.findByPk(id);

            return res.status(200).json({
                success: true,
                message: "Restaurant updated successfully!",
                data: updatedRestaurant,
            });

        } catch (error: any) {
            console.error("update by ID error :::", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });
        }
    }


}

export const restaurantController = new RestaurantController();

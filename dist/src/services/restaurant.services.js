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
exports.restaurantServices = void 0;
const restaurant_repository_1 = __importDefault(require("../repository/restaurant.repository"));
class RestaurantServices {
    constructor(restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }
    createRestaurant(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.restaurantRepository.createRestaurant(data);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getAllRestaurant() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.restaurantRepository.getAllRestaurant();
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getRestaurantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.restaurantRepository.getRestaurantById(id);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateRestaurant(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.restaurantRepository.updateRestaurant(id, data);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.restaurantRepository.deleteData(id);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = RestaurantServices;
const restaurantRepository = new restaurant_repository_1.default();
exports.restaurantServices = new RestaurantServices(restaurantRepository);

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
const baseRepository_1 = __importDefault(require("./baseRepository"));
const models_1 = __importDefault(require("../../db/models"));
class RestaurantRepository extends baseRepository_1.default {
    constructor() {
        super(models_1.default.Restaurant);
    }
    createRestaurant(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existData = yield this.findOne(data.name);
                if (existData) {
                    const error = new Error('Restaurant Already Exist');
                    error.name = 'RestaurantAlreadyExist';
                    throw error;
                }
                const response = yield this.create(data);
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
                const response = yield this.findAll();
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
                const response = yield this.findById(id);
                if (!response) {
                    const error = new Error('Restaurant Not Exist');
                    error.name = 'RestaurantNotExist';
                    throw error;
                }
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
                const existData = yield this.findOne(data.name, id);
                if (existData) {
                    const error = new Error('Restaurant Already Exist');
                    error.name = 'RestaurantAlreadyExist';
                    throw error;
                }
                const response = yield this.updateById(data, id);
                const updatedData = yield this.findById(id);
                return updatedData;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const exist = yield this.findById(id);
                if (!exist) {
                    const error = new Error('Restaurant Not Exist');
                    error.name = 'RestaurantNotExist';
                    throw error;
                }
                const response = yield this.deleteById(id);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = RestaurantRepository;

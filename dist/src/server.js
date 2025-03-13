"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const restaurant_1 = __importDefault(require("./routes/restaurant"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const PORT = 5005;
const app = (0, express_1.default)();
app.use(express_1.default.json()); // ✅ This allows Express to parse JSON requests
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: [
        "http://127.0.0.1:5173",
        "http://localhost:5173",
        "http://localhost:5005",
    ],
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
    credentials: true, // ✅ Allowed outside 'origin'
}));
app.use("/user-service", restaurant_1.default);
//start server
app.listen(PORT, (error) => {
    if (error)
        throw error;
    console.log(`SERVER IS RUNNING ON PORT: http://localhost:${PORT}`);
});

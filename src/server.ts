import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import restaurantRoutes from './routes/restaurant'
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json()); // ✅ This allows Express to parse JSON requests
app.use(express.urlencoded({ extended: true })); 
app.use("/user-service", restaurantRoutes)

app.listen(PORT, (error: any) => {
    if(error) throw error
    console.log(`SERVER IS RUNNING ON PORT: http://localhost:${PORT}`);
});



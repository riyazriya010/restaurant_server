import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import restaurantRoutes from './routes/restaurant'
import cors from 'cors'
dotenv.config()

const PORT = 5005
const app = express()

app.use(express.json()); // ✅ This allows Express to parse JSON requests
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
      origin: [
        "http://127.0.0.1:5173",
        "http://localhost:5173",
        "http://localhost:5005",
      ],
      methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
      credentials: true, // ✅ Allowed outside 'origin'
    })
  );
  
  app.use("/user-service", restaurantRoutes)

  //start server
app.listen(PORT, (error: any) => {
    if(error) throw error
    console.log(`SERVER IS RUNNING ON PORT: http://localhost:${PORT}`);
});



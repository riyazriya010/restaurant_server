import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.get('/', async (req: Request, res: Response): Promise<any> => {
    try{
        res.send('Hello World');
    }catch(error: any){
        console.log('error : ', error)
    }
});

app.listen(PORT, (error: any) => {
    if(error) throw error
    console.log(`SERVER IS RUNNING ON PORT: http://localhost:${PORT}`);
});



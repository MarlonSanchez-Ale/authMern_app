import express from "express";
import cors from 'cors';
import morgan from 'morgan'
import connect from "./database/conn.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = 8080;

// HTTP GET REQUEST
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request")
})


// Start server only when we have valid connection 
connect().then(() => {
    try {

        //Start server
        app.listen(port, () => {
            console.log(`Server connnected to http://localhost:${port}`)
        })

    } catch (error) {
        console.log('Cannot connnect to the server')
    }
})


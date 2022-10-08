import { Controllers } from "./app/controllers"
import { errorMiddleware } from "./app/middlewares/error.middleware"
import { AppDataSource } from "./services"
const express = require('express')
const { useExpressServer } = require('routing-controllers')
const { API_PORT, DB_PORT } = require('./config')


const ServerInitialize = async() => {
    await AppDataSource.initialize().then(()=> console.log(`Postgres is running on port ${DB_PORT}!`))
    const server = express()
    server.use(express.json())
    
    useExpressServer(server, {
        controllers: Controllers,
    });
    
    server.use(errorMiddleware)
    return server.listen(API_PORT, () => console.log(`Listening API on ${API_PORT}!`));    
}

ServerInitialize()

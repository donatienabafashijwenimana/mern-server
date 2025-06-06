import {Server} from 'socket.io'
import express from 'express'
import http from 'http'
import cors from 'cors'
const app = express()

const server =  http.createServer(app)

const io = new Server(server,{
    cors:{
       origin:["http://localhost:3000"],
       Credential:true
    }
})

export {io,app,server};
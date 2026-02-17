import express from 'express'
import cors from 'cors'
import db from './dbConnections.js'
import studentRouter from './Routers/studentsRouter.js'
import coursesRouter from './Routers/coursesRouter.js'
import usersRouter from './Routers/usersRouter.js'

const server = express();
server.use(cors())

server.use ("/students", studentRouter)
server.use ("/courses", coursesRouter)
server.use ("/login", usersRouter)

server.get ("/", (req, res)=> {
    res.send("The server is running")
})

//server.get ("/students", (req, res)=> (
//    res.send ("The get request for students is received.")
//))

//server.get ("/courses", (req, res)=> (
//    res.send ("The get request for courses is received.")
//))

//server.post ("/students", (req, res) => {
//    res.send ("The post request is received.")
//})

server.listen (4000, ()=> {
    console.log ("The server is running at port 4000")
})

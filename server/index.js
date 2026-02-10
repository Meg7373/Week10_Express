import express from 'express'
import cors from 'cors'

const server = express();

server.get ("/", (req, res)=> {
    res.send("The server is running")
})

server.listen (4000, ()=> {
    console.log ("The server is running at port 4000")
})

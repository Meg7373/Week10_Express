import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()

router.get ("/", async (req,res)=> {
    
    let [result] = await db.query ("select * from students")
    console.log (result)
    res.send ("Student Request Received 1.")
})

router.get ("/:id", (req,res)=> {
    res.send ("Student Request Received 2.")
})

export default router;
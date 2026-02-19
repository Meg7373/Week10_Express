import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()


router.get ("/", (req,res)=> {
    console.log ('method', req.method)
    let userName = req.body.userName
    let password = req.body.password
   console.log (userName, password)
   //const {userName, password} = req.body
   //console.log (userName, password)
   let [response] = db.query (`SELECT * FROM users WHERE userName=? AND password=?;`, [userName, password])
   console.log (response)
   res.send("hello")
})

router.get ("/signup", async (req,res)=> (
    console.log ("Router register user ...")
))

router.post ("/", async (req,res)=> (
    console.log("")
    const {userName, password, email} = req.body
    console.log (userName, password, email)
    let response = await db.query("")
    console.log (response)
    res.status(200).send ("hello")
))
export default router;
import express from 'express'
import db from '../dbConnections.js'

const router = express.Router()

router.get ("/", async (req,res)=> {
    console.log("Request from client received")
    let [result] = await db.query ("select * from students")
    console.log (result)
    res.send ("Student Request Received 1.")
})

router.get ("/:categoryID", async (req,res)=> {
    console.log ("Router for fetching students by ID.")
    let response = await db.query ("SELECT * FROM schoolDB.students JOIN enrolments ON students.studentID = enrolments.studentIDWHERE courseID=${categoryID}")
    console.log (response)
})

export default router; 
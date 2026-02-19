import express from 'express'

const router = express.Router()

router.get ("/", async (req,res)=> {
    console.log ("Router for fetching courses ...")
    let response = await db.query ("SELECT * FROM schooDB.courses")
    console.log (response)
    res.send(response)
})

export default router;
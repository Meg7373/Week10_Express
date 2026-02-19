import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ListCourses() {
  
  const [courses, setCourse] = useState (
    {
    courseName: "",
    courseCode: "",
    credit: ""
})
  
  useEffect(()=> {
    async function FetchCourse () {
       let response = await axios.get ("http://localhost:4000/courses/")
        console.log (response.data)
        setCourse (response.data)
    } 
    FetchCourse()
  }, [])
  
  
  
  
  
  
    return (
    <div>ListCourses</div>
  )
}

export default ListCourses;
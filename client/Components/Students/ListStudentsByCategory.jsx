import React, { useEffect, useState } from 'react'

function ListStudents() {

    const [students, setStudents] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    useEffect(() => {
        async function fetchstudents () {
            let response = await axios.get ("http://localhost:4000/students/")
            console.log (response.data)
            setStudents (response.data)
            console.log(students)
    }
        fetchstudents()
    }, [])

  return (
    <Table striped>
        <thead>
            <tr>
                <th>First Name </th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {students.map ((student)=> (
            <tr>
                <td>student.firstName</td>
                <td>student.lastName</td>
                <td>student.email</td>
            </tr>
              ))}
        </tbody>
    </Table>
    
  )
}

export default ListStudents

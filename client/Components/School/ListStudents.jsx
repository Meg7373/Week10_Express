import React, { useEffect } from 'react'

function ListStudents() {
  return (
    <Table striped>
        <thead>
            <tr>
                <th>First Name </th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
    </Table>
    
  )
}

useEffect(() => {
    axios.get ("http")
})
export default ListStudents

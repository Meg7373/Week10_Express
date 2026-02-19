import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';


function Register() {
    const [formData, setFormData] = useState ({
        userName: "",
        password: "",
        email: ""
    });

    function handleChange (event) {
       const name = event.target.name 
       const value = event.target.value
      setFormData ({...formData, [name]:value})
    }

    function handleSubmit (event) {
        event.preventDefault()
        console.log (text)
    }

    async function handleClick (event) {
        event.preventDefault()
        console.log (text)
        let response = await axios.get ('http://localhost:4000/users/')
        console.log (response)
        if (!response.status==200)
            return;
    }
    }
  return (
    <>
        <h1>User Sign-Up Form</h1>
        <Form onSubmit={(event)=>handleSubmit(event)}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                type='text'
                name='username'
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                type='text'
                name='password'
                />
                <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>
        </Form>
    </>
  )

export default Register; 
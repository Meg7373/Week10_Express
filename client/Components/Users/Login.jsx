import React from 'react'
import Button from ''
import Form from ''
import axios from 'axios'

function Login() {
    const [formData, setFormData] = useState ({
        userName: "",
        password: ""
    })

    function handleChange (event) {
        let inputName = event.target.name
        let inputValue = event.target.value
        setFormData ({...formData, [inputName]: inputValue})
    }

    async function handleSubmit (event) {
        event.preventDefault()
        console.log (formData)
        const response = await axios.post ("http://localhost:4000/login", formData)
        console.log (response.data)
        if (response.data.length == 0)
            return;
    }

  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
  );
}

export default Login
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Registraton = () => {
    const { createUserWithEmail } = useContext(AuthContext)
    const [error, setError] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photo.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
        })
    }
    return (

        <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Your Name</Form.Label>
        <Form.Control name='name' type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photo' type="name" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Text className="text-danger">
         {error}
        </Form.Text>
        </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form> 
        </div>
    );
};

export default Registraton;
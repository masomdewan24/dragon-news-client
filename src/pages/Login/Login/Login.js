import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [error, setError] = useState('')
  const navigate = useNavigate();
  const {signIn} = useContext(AuthContext)
  const handleLogIn = (event) => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate('/')
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
           <Form onSubmit={handleLogIn}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group className="mb-3" >
        <Form.Text className="text-danger">
         {error}
        </Form.Text>
        </Form.Group>
      
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form> 
        </div>
    );
};

export default Login;
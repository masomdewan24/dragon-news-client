import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndCondations = () => {
    return (
        <div>
            <h3>Our Terms And Condations</h3>
          <p>Go Back ot <Link to={'/register'}> <Button variant="light">Register</Button></Link></p>  
        </div>
    );
};

export default TermsAndCondations;
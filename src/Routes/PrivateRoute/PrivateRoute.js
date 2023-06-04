import React, { useContext } from 'react';
import { AuthContext } from '../../pages/context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();

    if (loding) {
    return <Spinner animation="border" variant="primary" />
}

    if (!user) {
       return <Navigate to="/login" state={{from:location}} replace></Navigate>
    } 
    return children;
};

export default PrivateRoute;
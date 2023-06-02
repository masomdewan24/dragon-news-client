import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaFacebook, FaGithub, FaGoogle, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../../../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const { provderLogin } = useContext(AuthContext);
    
    const haddleSingIn = () => {
        const googleProvider = new GoogleAuthProvider()
        provderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        .catch(error =>console.error(error))
    }

    return (
        <div>
           <ButtonGroup vertical>
      <Button onClick={haddleSingIn} className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-2'>
                <h5>Find us on</h5>
                <ListGroup>
      <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaTwitch></FaTwitch> FaTwitch</ListGroup.Item>
      <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Terms and condition</ListGroup.Item>
    </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;
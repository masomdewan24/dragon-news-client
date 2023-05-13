import React from 'react';
import { Outlet } from 'react-router-dom';

import { Col, Container, Row } from 'react-bootstrap';
import Header from '../pages/shared/Header/Header';
import LestSideNav from '../pages/shared/LeftSideNav/LestSideNav';
import RightSideNav from '../pages/shared/RightSideNav/RightSideNav';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2' className='d-none d-lg-block'>
                       <LestSideNav></LestSideNav>
                    </Col>
                    <Col lg='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
// Home page React component
import React from 'react';

import './HomePage.css';
import {Button, Col, Container, Row} from "react-bootstrap";

import {homepage} from '../../assets/data/main.json';
import TileButton from "../../components/TileButton/TileButton.jsx";

const HomePage = () => {
    return (
        <div className="home-page">
            <Container fluid className="d-flex justify-content-center align-items-center vh-100">
                <Row>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <TileButton
                            icon={homepage.btnNew.icon}
                            text={homepage.btnNew.txt}
                            urlTo={homepage.btnNew.url}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <TileButton
                            icon={homepage.btnHistory.icon}
                            text={homepage.btnHistory.txt}
                            urlTo={homepage.btnHistory.url}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default HomePage;
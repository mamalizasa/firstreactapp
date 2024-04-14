import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5">
      <Container>
        <Row className="py-4">
          <Col xs={12} md={4} className="mb-4">
            <h5>О нас</h5>
            <p>Сайт посвящен React.js и его возможностям.</p>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <h5>Ссылки</h5>
            <ul className="list-unstyled">
              <li><a className="nav-link" href="#">Главная</a></li>
              <li><a className="nav-link" href="#">Узнать больше</a></li>
              <li><a className="nav-link" href="#">Подписаться</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4} className="mb-4">
            <h5>Социальные сети</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} React.js Сайт</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

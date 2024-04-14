import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap';
import logo from "../img/logo.png"
import '../css/main.css'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="text-center">
      <h2>Таймер обратного отсчета</h2>
      <p>Осталось времени: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
    </div>
  );
}

function Interest() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    setEmail('');
  };

  return (
    <Container fluid className="pt-5 cont_main">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1>Добро пожаловать на сайт React.js!</h1>
          <p>React.js - это библиотека JavaScript для создания пользовательских интерфейсов.</p>
          <Button variant="primary" className="knopa">Узнать больше</Button>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col xs={6} md={4} className="text-center">
          <Image src={logo} alt="React Logo" className="img-fluid" />
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col xs={12} md={8}>
          <CountdownTimer />
          <div className="text-center mt-4">
            <h2>Подписаться на рассылку</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Введите ваш email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" className="knopa m-2" type="submit">
                Подписаться
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Interest;

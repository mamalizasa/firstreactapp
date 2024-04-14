import React from "react"
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import image1 from '../img/image1.jpg'; // Путь к вашим изображениям
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';


class Main extends React.Component {
    render() {
      return (
        <main>
            <Carousel>
                
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-carousel-image"
                    src={image1}
                    alt="First slide"
                    />
                    <div className="darken-overlay"></div>
                    <Carousel.Caption>
                    <p>React - это не просто инструмент, это философия. Подходите к разработке с открытым умом и чистым сердцем</p>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-carousel-image"
                    src={image2}
                    alt="Second slide"
                    />
                    <div className="darken-overlay"></div>
                    <Carousel.Caption>
                    <p>Каждая новая строка кода на React - это не просто строка, это шаг вперед в создании чего-то удивительного</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-carousel-image"
                    src={image3}
                    alt="Third slide"
                    />
                    <div className="darken-overlay"></div>
                    <Carousel.Caption>
                    <p>React - это не просто библиотека, это возможность превратить идеи в реальность с легкостью и красотой</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </main>
      )
    }


}

export default Main
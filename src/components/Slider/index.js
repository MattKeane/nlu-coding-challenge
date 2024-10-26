import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import slider_1 from '../../assets/images/slider_1.jpg';
import slider_2 from '../../assets/images/slider_2.jpg';
import slider_3 from '../../assets/images/slider_3.jpg';

export default function Slider() {
    return (
        <Carousel interval={ null } wrap={ false } >
            <Carousel.Item>
                <Image src={ slider_1 } className="slider-image" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={ slider_2 } className="slider-image" />
            </Carousel.Item>
            <Carousel.Item>
                <Image src={ slider_3 } className="slider-image" />
            </Carousel.Item>
        </Carousel>
    );
}
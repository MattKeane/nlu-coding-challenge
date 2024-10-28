// Slider Component
// Displays a carousel of images
// Images and links can be updated by editing the sliderItems array

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// Image imports
import slider_1 from '../../assets/images/slider_1.jpg';
import slider_2 from '../../assets/images/slider_2.jpg';
import slider_3 from '../../assets/images/slider_3.jpg';

export default function Slider() {
    const sliderItems = [
        {
            image: slider_1,
            link: '/capabilities',
        },
        {
            image: slider_2,
            link: '/design',
        },
        {
            image: slider_3,
            link: '/certification',
        },
    ];

    const slides = sliderItems.map(({image, link}, i) => (
        <Carousel.Item key={ i }>
            <a href={ link }>
                <Image src={ image } className="slider-image" />
            </a>
        </Carousel.Item>
    ));

    return (
        <Carousel interval={ null } wrap={ false } >
            {
                slides
            }
        </Carousel>
    );
}
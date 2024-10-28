import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import logo from '../../assets/images/logo.png';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Row as="footer">
            <Col>
                <Container as="small" className="copyright">
                    Copyright © { currentYear }. All rights reserved.
                </Container>
            </Col>
            <Col xs={ 6 } className="footer-logo-container">
                <Image src={ logo } className="footer-logo" />
            </Col>
        </Row>
    );
}
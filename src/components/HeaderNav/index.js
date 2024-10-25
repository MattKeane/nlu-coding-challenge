import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HeaderNav() {
    return (
            <Navbar expand="sm">
                <Container>
                    <Navbar.Toggle aria-controls="header-navbar" />
                    <Navbar.Collapse id="header-navbar">
                        <Nav>                            
                            <NavDropdown title="Capabilities">
                                <NavDropdown.Item>Design</NavDropdown.Item>
                                <NavDropdown.Item>Production</NavDropdown.Item>
                                <NavDropdown.Item>Certification</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>
                                About Us
                            </Nav.Link>
                            <Nav.Link>
                                Contact Us
                            </Nav.Link>                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
}
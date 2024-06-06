import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserAvatar from '../UserAvatar/UserAvatar';

function AppNavbar() {
    return (
        <Navbar expand="lg" className=" border-1 border-gray fixed w-full" style={{ position: 'fixed', width: '100%', background: 'white', zIndex: '1000' }} >
            <Container fluid>
                <Navbar.Brand href="/home" className="font-bold ">GVM</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/home">Home</Nav.Link>
                        <NavDropdown title="Service" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/tcform">TC Builder</NavDropdown.Item>
                            <NavDropdown.Item href="/bonafiedform">
                                Bonafied
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                Certificate
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        {/* <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"

                            disabled
                        /> */}
                        {/* <Button variant="outline-success">Search</Button> */}
                        <UserAvatar />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
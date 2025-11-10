import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { useEffect, useState } from 'react';

function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
       setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <Navbar expand="md" className='shadow-sm py-3 mb-5'>
        <Container className='justify-content-between align-items-center'>
            <Navbar.Brand href="#home">MindCare</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            <div className='me-3 d-sm-block d-md-flex gap-3 align-items-center'> 
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={() => toggleTheme()}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                </div>
                <Button className='d-sm-block w-sm-100' variant="primary">Entrar</Button>   
            </div>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default Header;
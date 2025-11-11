import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import ThemeSwitch from '../../../components/ThemeSwitch/ThemeSwitch';

function Header() {
    return (
        <header>
            <Navbar expand="md" className='shadow-sm py-3 mb-5'>
                <Container className='justify-content-between align-items-center'>
                    <Navbar.Brand href="#home">MindCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto gap-3">
                        <Nav.Link href="#home">Sobre</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <div className='d-sm-block d-md-flex gap-3 align-items-center'> 
                        <ThemeSwitch />
                        <Button className='flex-sm-column flex-md-row w-sm-100' variant="outline-info">Encontrar Psicólogo</Button>   
                        <Button className='flex-sm-column flex-md-row w-sm-100' variant="primary">Entrar</Button>
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className='text-center my-5 main-section'>
                <h1 className='header-title text-white fw-bold mb-3'>
                    Encontre o psicólogo ideal para você. <br />
                    Agende consultas de forma fácil e segura
                </h1>
                <p className='mb-4 text-white'>Conectamos você a psicólogos qualificados para sessões por video ou presencial, com total segurança e privacidade.</p>
                <div className="d-flex justify-content-center gap-3">
                    <Button className='flex-sm-column flex-md-row w-sm-100' variant="outline-info">Encontrar Psicólogo</Button>   
                    <Button className='flex-sm-column flex-md-row w-sm-100' variant="dark">Sou psicólogo</Button>
                </div>
            </Container>
        </header>
    );
}

export default Header;
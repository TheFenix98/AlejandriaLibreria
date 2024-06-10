import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';

const categorias = [
  { nombre: 'Fantasía', ruta: '/category/fantasia' },
  { nombre: 'Policial', ruta: '/category/policial' },
];

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Alejandría</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categorias.map((categoria, index) => (
                <NavDropdown.Item key={index} as={Link} to={categoria.ruta}>
                  {categoria.nombre}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

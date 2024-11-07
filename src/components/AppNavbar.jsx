import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  const {cart} = useSelector((state)=> state.cart)
  // حساب الكمية الإجمالية للمنتجات في العربة
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <Navbar fixed='top' expand="lg" className="text-white bg-dark py-3 mb-3">
    <Container>
      <Link to="/" className='pe-4 logo'>cart-App</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav text-color" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className='px-2' to="/">products</Link>
          <Link className='px-2' to="/cart">cart-({totalQuantity})</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AppNavbar

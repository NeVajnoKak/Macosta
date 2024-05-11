import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Navbar.css'
import React, { useEffect, useState } from 'react';
import SearchProduct from '../Search/SearchProduct';
import CartService from '../../API/Service/CartService/CartService';
const NavScrollExample = ({ onSearch }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCartCount();
  }, []);

  const fetchCartCount = () => {
    CartService.getCartCount()
      .then(response => {
        setCartCount(response.data.cartCount);
      })
      .catch(error => {
        console.error('Error fetching cart item count:', error);
      });
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Link className='ss' to={"/"}>   
        <Navbar.Brand>Макоста</Navbar.Brand>
      </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link className='ss' to={"/about"}> */}
              <Nav.Link  className='ss' href={"/about"}>О нас</Nav.Link>
            {/* </Link> */}
            {/* <SearchNull onSearch={onSearch}></SearchNull> */}
            {/* <Link className='ss' to={"/catalog"}> */}
              <Nav.Link className='ss' href={"/catalog"}>Каталог</Nav.Link>
            {/* </Link> */}
            <Nav.Link href="#action3"></Nav.Link>
            
            <Nav.Link href="#" disabled>
              Скидки
            </Nav.Link>
          </Nav>
          <form className="d-flex me-3 ">
            <Link to = {"/cart"}>
              <button className="btn btn-outline-light" type="submit">
                <i className="bi-cart-fill me-1"></i>
                    Cart
                <span className="badge bg-light text-dark ms-1 rounded-pill">{cartCount}</span>
              </button>
            </Link>
          </form>
          <SearchProduct onSearch={onSearch}/>
          {/* <Form className="d-flex me-2">
            <Form.Control
              type="search"
              placeholder="Поиск..."
              className="me-2"
              aria-label="Search"
            />
          </Form> */}
          {/* <Nav className='me-5 p-3'>
          <NavDropdown title="Профиль" id="navbarScrollingDropdown">
            <Link className='ss' to={"/profile"}>
              <NavDropdown.Item href="#action3">Настройка</NavDropdown.Item>
            </Link>
            <Link className='ss' to={"/profile/history"}>
              <NavDropdown.Item href="#action4">
                История покупок
              </NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <Link className='ss' to={"/logout"}>
              <NavDropdown.Item href="#action5">
                Выйти
              </NavDropdown.Item>
            </Link>
            </NavDropdown>
          </Nav> */}
          
          {/* <Link to={"/login"}><Button  variant="outline-light">Логин</Button></Link>
          <Link to={"/register"}><Button className='m-1' variant="outline-light">Регистрация</Button></Link> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
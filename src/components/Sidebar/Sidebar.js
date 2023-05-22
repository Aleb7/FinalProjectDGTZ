import React, { useState } from 'react';
import { Navbar, Container, Button, Offcanvas } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../Foto/raeNav.png'
import "./Sidebar.scss"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';






const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" variant="light" bg="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" >
            <img src={Logo} className="logo-img" alt="logo" />
          </Navbar.Brand>
          <Button className='sidebar-toggle' variant="outline-secondary" onClick={handleShow}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menù</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link active" onClick={handleClose}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/trips" className="nav-link" onClick={handleClose}>Viaggi</Link>
            </li>
            <li className='nav-item'>
              <Link to="/users" className='nav-link' onClick={handleClose}>Utenti</Link>
            </li>
          </ul>
          <ul className="nav flex-column my-2 mx-2 bottom-links">
            <li className="nav-item">
              <Link to="https://github.com/Aleb7?tab=repositories" className="nav-link">
                Aleb7 <FontAwesomeIcon icon={faGithub} className='fa-lg' />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="https://www.linkedin.com/in/alessio-beschi-901341271/" className="nav-link">
               Alessio Beschi <FontAwesomeIcon icon={faLinkedin} className='fa-lg' />
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );

}

export default Sidebar;

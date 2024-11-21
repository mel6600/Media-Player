import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar className='bg-info'>
        <Container >
         <Link to={'/'} style={{textDecoration:"none"}}>
            <Navbar.Brand style={{color:"white"}} href="#home">
            <i className="fa-solid fa-music me-2"></i>
              React Bootstrap
            </Navbar.Brand>
         </Link>
        </Container>
      </Navbar>
  )
}

export default Header

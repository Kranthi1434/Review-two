import React from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Image,
  NavDropdown,
} from "react-bootstrap";
import logo from "../assets/images/Logo.png";
import "../components/header.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  // function myFunction(){
  //     document.getElementById("demo").style.backgroundColor = "#ff0000";
  // }
  return (
    <>
      {/* <Navbar collapseOnSelect expand='lg' className='appbar-style' data-bs-theme='dark'>
            <Navbar.Brand className='logo-style'>
                <Image src={logo} alt='website lgo'/>
            </Navbar.Brand>
            <Navbar.Toggle  aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className='m-auto nav-link'>
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >About Us</Nav.Link>
                    <Nav.Link >Sports <MdKeyboardArrowDown/> </Nav.Link>
                    <Nav.Link >Services</Nav.Link>
                    <Nav.Link  >Blogs</Nav.Link>
                    <Nav.Link >Contact Us</Nav.Link>
                    <Nav.Link ><FiSearch/></Nav.Link>
                </Nav>
                <div>
                  <Button className='black'>Login</Button>
                  <Button  className='yellow ms-2'>Sign Up</Button>
                </div>
            </Navbar.Collapse>
       </Navbar> */}

      <Navbar
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        className="bg-dark-tertiary"
      >
        <Navbar.Brand href="#home" className="logo-style">
          <Image src={logo} alt="website lgo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto  nav-link">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about Us">About Us</Nav.Link>
            <Nav.Link href="#sports">
              Sports <MdKeyboardArrowDown />{" "}
            </Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#blogs">Blogs</Nav.Link>
            <Nav.Link href="#contact us">Contact Us</Nav.Link>
            <Nav.Link>
              <FiSearch />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Button className="black">Login</Button>
            </Nav.Link>
            <Nav.Link href="#memes">
              <Button className="yellow ms-2">Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;

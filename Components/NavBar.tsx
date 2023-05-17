import React, { useContext } from "react";

import {
  Nav,
  Navbar,
  Container,
  InputGroup,
  Form,
  Button,
  NavLink,
} from "react-bootstrap/";
import style from "../styles/NavBar.module.css";
import { AppContext } from "./AppContext";

const NavBar = () => {
  const { navSearch, setNavSearch } = useContext(AppContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNavSearch({
      name: event.target.value,
    });
    console.log(event.target.value);
  };
  return (
    <>
      <Navbar bg="primary" expand="lg ">
        <Container>
          <Navbar.Brand href="/" className="text-white me-auto ">
            <h4>Mobile-Bazzar</h4>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Item>
                <Container>
                  <InputGroup>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="text"
                      onChange={handleChange}
                    />
                    <Button variant="warning" className="">
                      search
                    </Button>
                  </InputGroup>{" "}
                </Container>
              </Nav.Item>
            </Nav>

            <Nav>
              <Nav.Link href="/forms/login">
                <InputGroup>
                  <Button
                    className="btn btn-light btn-md btn-sm"
                    style={{ width: "7rem" }}
                  >
                    Log-in
                  </Button>
                </InputGroup>
              </Nav.Link>

              <Nav.Link href="/forms/signup">
                <InputGroup>
                  <Button
                    className="btn btn-light btn-md btn-sm"
                    style={{ width: "7rem" }}
                  >
                    Sign Up
                  </Button>
                </InputGroup>
              </Nav.Link>
              <Nav.Link href="/">Home</Nav.Link>
              <NavLink>Contact</NavLink>
              <Nav.Link className="cart" href="/Cart">
                <span>Cart</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;

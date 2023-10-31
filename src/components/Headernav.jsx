import React from "react";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

const Headernav = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container style={{ justifyContent: "space-between" }} fluid>
          <Navbar.Brand href="#">
            <img
              height="40px"
              width="auto"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nwYYe7IKZ_u6xjzk4KUtXKsUfZqZN2dK4Q&usqp=CAU"
              alt="youtube imgg"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <Form.Control
                  style={{ width: "515px" }}
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
              <Nav.Link href="#action1">
                <BsFillMicFill />{" "}
              </Nav.Link>
              <Nav.Link href="#action2">
                <AiOutlineVideoCameraAdd />
              </Nav.Link>

              <Nav.Link href="#" disabled>
                <IoMdNotificationsOutline></IoMdNotificationsOutline>
              </Nav.Link>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headernav;

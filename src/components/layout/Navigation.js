import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import SiteTitle from "src/components/SiteTitle"
import logo from "src/images/python-small.png"

export default () => (
  <Navbar bg="primary" variant="dark" expand="lg" className="text-monospace">
    <Container>
      <Navbar.Brand href="/">
        <div className="d-inline-block rounded-circle bg-white mr-3">
          <img
            className="p-1"
            src={logo}
            height={40}
            width={40}
            alt="python logo"
          />
        </div>
        <SiteTitle />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

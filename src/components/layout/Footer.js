import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

export default () => (
  <Navbar bg="primary" variant="dark" expand="lg" className="text-monospace">
    <Container>
      <Nav>
        <Navbar.Text>© python every day {new Date().getFullYear()}</Navbar.Text>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="https://twitter.com/pythoneveryday">twitter</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

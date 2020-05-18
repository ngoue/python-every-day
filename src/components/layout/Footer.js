import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

export default () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Nav>
        <Navbar.Text className="text-monospace">
          © python every day {new Date().getFullYear()}
        </Navbar.Text>
      </Nav>
    </Container>
  </Navbar>
)

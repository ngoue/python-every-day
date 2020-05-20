import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Navigation from "./Navigation"

export default ({ children }) => (
  <div id="layout">
    <Navigation />
    <Container className="my-2">{children}</Container>
    <Footer />
  </div>
)

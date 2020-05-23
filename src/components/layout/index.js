import React from "react"
import { Container } from "react-bootstrap"
import Footer from "./Footer"
import Navigation from "./Navigation"
import GDPR from './GDPR'

export default ({ children }) => {
  return (
    <div id="layout">
      <Navigation />
      <Container className="my-2">{children}</Container>
      <Footer />
      <GDPR />
    </div>
  )
}

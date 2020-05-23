import React from "react"
import { Col, Row } from "react-bootstrap"
import Layout from "src/components/layout"

export default () => (
  <Layout>
    <Row>
      <Col md={6} className="mb-5 mx-auto">
        <h1>404 - Not Found</h1>
        <pre>
          <code>
            Traceback (most recent call last):
            <br />
            &nbsp;&nbsp;File "&lt;stdin&gt;", line 1, in &lt;module&gt;
            <br />
            PageError: page '{window.location.pathname}' is not defined
          </code>
        </pre>
      </Col>
    </Row>
  </Layout>
)
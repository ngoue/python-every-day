import React from "react"
import { Col, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"
import Layout from "src/components/layout"

const stacktraceId = "404-stacktrace"
const pageTemplate = "$page"

export default () => (
  <Layout>
    <Helmet>
      <title>python every day - 404</title>
      <script>
        {`
          var callback = function() {
            console.log("invoking callback");
            var el = document.getElementById("${stacktraceId}");
            el.innerText = el.innerText.replace("${pageTemplate}", window.location.pathname)
          };

          if (
            document.readyState === "complete" ||
            (document.readyState !== "loading" && !document.documentElement.doScroll)
          ) {
            callback();
          } else {
            document.addEventListener("DOMContentLoaded", callback);
          }
        `}
      </script>
    </Helmet>
    <Row>
      <Col md={6} className="mb-5 mx-auto">
        <h1>404 - Not Found</h1>
        <pre>
          <code id={stacktraceId}>
            Traceback (most recent call last):
            <br />
            &nbsp;&nbsp;File "&lt;stdin&gt;", line 1, in &lt;module&gt;
            <br />
            PageError: "{pageTemplate}" is not defined
          </code>
        </pre>
      </Col>
    </Row>
  </Layout>
)

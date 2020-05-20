import { graphql } from "gatsby"
import React from "react"
import { Button, Col, Nav, Row } from "react-bootstrap"
import { Helmet } from "react-helmet"
import Layout from "src/components/layout"

export default ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { previous, next } = pageContext
  return (
    <Layout>
      <Row>
        <Col lg={2} className="d-none d-lg-block">
          {/* reserved for future use */}
        </Col>
        <Col>
          <div className="post-container">
            <Helmet title={`python every day - ${post.frontmatter.title}`} />
            <article className="post">
              <h1 className="post-title">{post.frontmatter.title}</h1>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <Nav className="my-5 justify-content-between">
                <Nav.Item>
                  {previous && (
                    <Nav.Link href={previous.frontmatter.path} rel="prev">
                      <Button>Back</Button>
                    </Nav.Link>
                  )}
                </Nav.Item>
                <Nav.Item>
                  {next && (
                    <Nav.Link href={next.frontmatter.path} rel="next">
                      <Button>Next</Button>
                    </Nav.Link>
                  )}
                </Nav.Item>
              </Nav>
            </article>
          </div>
        </Col>
        <Col lg={2} className="d-none d-lg-block">
          {/* reserved for future use */}
        </Col>
      </Row>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

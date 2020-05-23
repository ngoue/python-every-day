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
      <Helmet>
        <title>python every day - {post.frontmatter.title}</title>
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="python every day" />
        <meta
          property="og:url"
          content={`https://pythoneveryday.com${post.frontmatter.path}`}
        />
        <meta property="twitter:title" content={post.frontmatter.title} />
        <meta property="twitter:site" content="@pythoneveryday" />
        <meta property="twitter:creator" content="@pythoneveryday" />
      </Helmet>
      <Row>
        <Col lg={2} className="d-none d-lg-block">
          {/* reserved for future use */}
        </Col>
        <Col>
          <div className="post-container">
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
                      <Button
                        variant="link"
                        className="font-weight-bold text-monospace"
                      >
                        &lt;&lt;&nbsp;previous
                      </Button>
                    </Nav.Link>
                  )}
                </Nav.Item>
                <Nav.Item>
                  {next && (
                    <Nav.Link href={next.frontmatter.path} rel="next">
                      <Button
                        variant="link"
                        className="font-weight-bold text-monospace"
                      >
                        next&nbsp;&gt;&gt;
                      </Button>
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

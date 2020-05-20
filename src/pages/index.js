import { graphql, Link } from "gatsby"
import React from "react"
import { Col, Row } from "react-bootstrap"
import Layout from "src/components/layout"
import SiteTitle from "src/components/SiteTitle"

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <Row>
        <Col xs={12} lg={8} className="mx-auto">
          <h1 className="sr-only">
            <SiteTitle />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg={2} className="d-none d-lg-block">
          {/* reserved for future use */}
        </Col>
        <Col>
          <div className="posts">
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => (
                <div className="post-preview mb-5" key={post.id}>
                  <h2>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <p className="post-excerpt">{post.excerpt}</p>
                </div>
              ))}
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
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

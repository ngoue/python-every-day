import { graphql } from "gatsby"
import React from "react"
import { Nav } from "react-bootstrap"
import { Helmet } from "react-helmet"
import Layout from "src/components/layout"

export default ({ data, pageContext }) => {
  const { markdownRemark: post } = data
  const { previous, next } = pageContext
  return (
    <Layout>
      <div className="post-container">
        <Helmet title={`python every day - ${post.frontmatter.title}`} />
        <article className="post">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Nav>
            <Nav.Item>
              {previous && (
                <Nav.Link href={previous.frontmatter.path} rel="prev">
                  &lt; {previous.frontmatter.title}
                </Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {next && (
                <Nav.Link href={next.frontmatter.path} rel="next">
                  {next.frontmatter.title} &gt;
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </article>
      </div>
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

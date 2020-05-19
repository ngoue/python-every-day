import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "src/components/layout"

export default ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className="post-container">
        <Helmet title={`python every day - ${post.frontmatter.title}`} />
        <div className="post">
          <h1 className="post-title">{post.frontmatter.title}</h1>
          {post.frontmatter.description ? (
            <p className="post-description lead">
              {post.frontmatter.description}
            </p>
          ) : null}
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
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
        description
      }
    }
  }
`

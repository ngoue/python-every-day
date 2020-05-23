import React from "react"
import { Container } from "react-bootstrap"
import { Helmet } from "react-helmet"
import Footer from "./Footer"
import GDPR from "./GDPR"
import Navigation from "./Navigation"

export default ({ children }) => {
  return (
    <div id="layout">
      <Helmet>
        <title>python every day</title>
        <meta
          name="description"
          content="Everyday Python from someone who uses Python every day"
        />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="python every day" />
        <meta property="og:site_name" content="python every day" />
        <meta
          property="og:url"
          content={`https://pythoneveryday.com${post.frontmatter.path}`}
        />
      </Helmet>
      <Navigation />
      <Container className="my-2">{children}</Container>
      <Footer />
      <GDPR />
    </div>
  )
}

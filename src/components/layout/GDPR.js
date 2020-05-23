import React from "react"
import { Alert, Button, Col, Container, Row } from "react-bootstrap"

const gatsbyGDPRCookieName = "gatsby-gdpr-google-analytics"
const gatsbyGDPRCookieAge = 60 * 60 * 24 * 365 * 2 // 2 years

export default () => {
  const _hasResponse =
    typeof document !== "undefined"
      ? document.cookie.includes(gatsbyGDPRCookieName)
      : null
  const [hasResponse, setHasResponse] = React.useState(_hasResponse)

  const handleGDPR = accepted => {
    document.cookie = `${gatsbyGDPRCookieName}=${accepted};path=/;max-age=${gatsbyGDPRCookieAge}`
    if (accepted) {
      // reload the page to get tracking cookies
      window.location.reload()
    } else {
      // dismiss the message
      setHasResponse(true)
    }
  }

  if (hasResponse) {
    return null
  }

  return (
    <Alert variant="warning" className="fixed-bottom mb-0">
      <Container>
        <Row>
          <Col lg={10} className="m-auto">
            <Row className="align-items-center">
              <Col xs={12}>
                <Alert.Heading>Welcome</Alert.Heading>
              </Col>
              <Col>
                <p>
                  This site uses cookies to help us see what content is most
                  meaningful to our readers. Are you okay with that?
                </p>
              </Col>
              <Col sm={12} md={4} className="mt-1 mt-sm-0">
                <Row>
                  <Col xs={12} sm={6}>
                    <Button
                      block
                      className="mb-2 mb-sm-0"
                      onClick={() => handleGDPR(true)}
                    >
                      Yes
                    </Button>
                  </Col>
                  <Col>
                    <Button block onClick={() => handleGDPR(false)}>
                      No
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Alert>
  )
}

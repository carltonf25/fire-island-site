import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ContentSection = styled.div`
  margin: 0 auto 40px auto;

  background: #f9f9f9;
  box-shadow: 0px 1px 4px 0px rgb(0, 0, 0, 0.14);
  font-family: "Libre Baskerville", serif;
  width: 90%;
  color: #4a4a4a;
  padding: 1.5rem;
  div {
    margin: 0 auto;
    width: 75%;
  }

  h1 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.1em;
    line-height: 25px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    margin: 0 0 1.5em 0;
    div {
      width: 100%;
    }
  }
`

const CallButton = styled.button`
  border: none;
  border-radius: 3px;
  background: #ff3547;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1em;
  padding: 1em 1em;
  cursor: pointer;
  box-shadow: 0px 1px 3px 1px rgb(0, 0, 0, 0.14);
  transition: 0.3s ease-in-out;
  :hover {
    box-shadow: 0px 3px 4px 2px rgb(0, 0, 0, 0.14);
    transform: translate3d(0px, -1px, 0);
  }
  :active {
    box-shadow: 0px 1px 2px 1px rgb(0, 0, 0, 0.14);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `services`, `website`, `atlanta`]} />
    <ContentSection>
      <div>
        <h1>
          We are <span style={{ color: `#ff3547` }}>Fire Island</span>
        </h1>
        <p>
          A web services company specializing in beautiful web design and
          effective web strategies for businesses. We’ll create a website that
          tells your story, attracts customers, and builds the business you
          want.
        </p>
        <p>
          We're here to help your business thrive online. Schedule a call with
          us to get a free quote on a custom website or other services.
          <br />
          <br />
          <i>
            It's just a quick, casual conversation to get to know you, and see
            if we're a good fit.
          </i>
        </p>
        <a
          target="blank"
          href="https://calendly.com/fire-island/free-quote-info-gathering"
        >
          <CallButton>Schedule a Call</CallButton>
        </a>
      </div>
    </ContentSection>
    <ContentSection>
      <div>
        <h1>Don't settle for a cookie-cutter site</h1>
        <p>
          Launch party creative business-to-business facebook. Launch party
          branding series A financing founders network effects buyer beta
          vesting period research & development strategy long tail product
          management.
        </p>
        <p>
          Assets android mass market termsheet launch party metrics release
          strategy gen-z entrepreneur. Traction business-to-business validation
          metrics holy grail churn rate pitch android growth hacking advisor
          beta marketing graphical user interface agile development.
        </p>
      </div>
    </ContentSection>
  </Layout>
)

export default IndexPage

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

  h3 {
    color: #ff3547;
  }
  p {
    font-size: 1.1em;
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

const PricingPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web`, `services`, `website`, `atlanta`]} />
    <ContentSection>
      <div>
        <h1>Pricing</h1>
        <h3>Fully Custom Website: $1K - 3K+</h3>
        <p>
          Our flagship solution begins with a discovery meeting, where we dive
          deep into your business and customers to figure out the very best
          online strategy for your business. We’ll then design and develop a
          fully custom website that best serves that strategy.
        </p>
        <h3>Marketing Channel Setup: $60 - $300+</h3>
        <p>
          Your website should serve as the central hub for your business, but
          marketing channels like Email, Facebook Ads, or Instagram posts can be
          powerful tools for extending your reach, growing your audience, and by
          extension, growing your business.
        </p>
        <p>
          We have extensive experience in marketing platforms, and can use this
          knowledge to help you grow your business and make more money online.
        </p>
        <hr />
        <p>
          We're here to help you thrive online. Schedule a call with us to get
          your free quote, and start the next chapter for your business.
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
  </Layout>
)

export default PricingPage

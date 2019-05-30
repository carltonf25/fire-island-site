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
    font-size: 52px;
  }

  h3 {
    color: #ff3547;
  }
  p {
    font-size: 20px;
    line-height: 25px;
  }
`

const CallButton = styled.button`
  border: none;
  background: #ff3547;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1em 2em;
  cursor: pointer;
  box-shadow: 0px 1px 3px 1px rgb(0, 0, 0, 0.14);
  transition: 0.3s ease-in-out;
  :hover {
    background: #fff3f3;
    color: #ff3547;
    :after {
      content: " 📱";
    }
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
          Our flagship solution includes our proven discovery process, where we
          dive deep into your business, your customers, and your competition to
          figure out the very best online strategy for your business. We’ll then
          design a fully custom website that best serves that strategy. As with
          all of our web projects, the goal is to get as many conversions for
          your business as possible.
        </p>
        <h3>Marketing Channel Setup: $60 - $300+</h3>
        <p>
          Your website should serve as the central hub for your business, but
          marketing channels like Email, Facebook Ads, or Instagram posts can be
          powerful tools for extending your reach and growing your audience.
        </p>
        <p>
          We have extensive experience in marketing platforms, and can use this
          knowledge to help you grow your business and make more money online.
        </p>
        <CallButton>Schedule a Call</CallButton>
      </div>
    </ContentSection>
  </Layout>
)

export default PricingPage

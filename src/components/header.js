import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"

const HeaderWrapper = styled.header`
  background: #f9f9f9;
  font-family: "Libre Baskerville", serif;
  padding: 2em 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 52px;
  transition: 0.3s ease-in-out;
  height: 145px;

  span img {
    width: 22rem;
    margin-bottom: -2rem;
    fill: #ff3547;
  }

  .tiki-logo {
    fill: #ff3547;
  }
  :hover {
    background: #ff3547;
    a {
      color: #fff;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      :hover {
        border-bottom: 2px solid #fff3f3;
      }
    }
  }
  h1 a {
    font-family: "Libre Baskerville", serif;
    color: #ff3547;
    text-decoration: none;
    font-size: 1.5em;
    :hover {
      text-decoration: none;
    }
  }

  @media screen and (max-width: 375px) {
    :hover {
      background: #fafafa;
      h1 a {
        color: #ee7373;
      }
    }
    h1 a {
      font-size: 1.2em;
    }

    nav {
      display: none;
    }
  }
`
const HeaderNav = styled.nav`
  margin: 0 auto;
  a {
    font-size: 1.1em;
    font-weight: bold;
    margin-left: 1em;
    text-decoration: none;
    color: #4a4a4a;
    transition: 0.2s ease-in-out;
    :hover {
      text-decoration: none;
      border-bottom: 2px solid #ee7373;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <span style={{ textAlign: `center`, margin: 0 }}>
      <img classname="tiki-logo" src={logo} />
      <h1 style={{ marginTop: `0`, color: `#ff3547` }}>Fire Island</h1>
    </span>
    <HeaderNav>
      <Link to="/">Services</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/">Our Work</Link>
    </HeaderNav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

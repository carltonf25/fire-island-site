import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"
import whiteLogo from "../images/logo-white.svg"

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

  :hover {
    background: #ff3547;
    a {
      color: #fff;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      :hover {
        border-bottom: 2px solid #fff3f3;
      }
      button {
        background: #f9f9f9;
        color: #ff3547;
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
    transition: 0.3s ease-in-out;
    :hover {
      text-decoration: none;
      border-bottom: 2px solid #ee7373;
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
  font-size: 0.8em;
  padding: 1em 1em;
  cursor: pointer;
  box-shadow: 0px 1px 3px 1px rgb(0, 0, 0, 0.14);
  transition: all 0.3s ease-in-out;
  :hover {
    background: #fff3f3;
    transform: translate3d(0px, -1px, 0);
    box-shadow: 0px 3px 4px 2px rgb(0, 0, 0, 0.14);
  }
  :active {
    box-shadow: 0px 1px 2px 1px rgb(0, 0, 0, 0.14);
  }
`

const Header = ({ siteTitle }) => {
  let [hovered, setHovered] = useState(false)
  return (
    <HeaderWrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          margin: `0 auto`,
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
        }}
      >
        <span style={{ textAlign: `center`, margin: 0 }}>
          {hovered ? <img src={whiteLogo} /> : <img src={logo} />}
          <h1 style={{ marginTop: `0`, color: `#ff3547` }}>Fire Island</h1>
        </span>
        <HeaderNav>
          <Link to="/">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <a
            target="blank"
            style={{ borderBottom: `none` }}
            href="https://calendly.com/fire-island/free-quote-info-gathering"
          >
            <CallButton
              style={
                hovered
                  ? {
                      marginLeft: `1em`,
                      transition: `0.3s ease-in-out`,
                      background: `#f9f9f9`,
                      color: `#ff3547`,
                    }
                  : {
                      marginLeft: `1em`,
                      transition: `0.3s ease-in-out`,
                      background: `#ff3547`,
                      color: `#f9f9f9`,
                    }
              }
            >
              Schedule a Call
            </CallButton>
          </a>
        </HeaderNav>
      </div>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

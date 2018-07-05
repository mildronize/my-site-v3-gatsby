import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
// import "./Footer.css";

class Header extends Component {
  render() {
    return (

      <header className="masthead">
        <h2 className="masthead-title">
          <Link to="/" >{config.siteTitle}</Link>
          <small>tagline</small>
        </h2>
      </header>
    );
  }
}

export default Header;

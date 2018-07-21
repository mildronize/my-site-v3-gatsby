import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

class Footer extends Component {
  render() {
    // const { config } = this.props;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }

    const boxStyle = {
      margin: '10px'
    };

    return (
      <footer className="footer">
        <div className="content has-text-centered is-size-6">
          <div>{copyright}</div>
          {/* Based on{" "}
          <a style={aStyle} href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
            </a>
          <div>
            <a href="https://bulma.io">
              <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="96" height="18" />
            </a>
          </div> */}
          <div className="box">
            <UserLinks config={config} />
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
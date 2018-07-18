import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
// import "./Footer.css";

class Header extends Component {
  render() {
    return (
        <div className="container">
          <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
              <div className="content">
                <div class="title is-size-3">
                  <Link to="/" >{config.siteTitle}</Link>
                  <small></small>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;

import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
            <div className="columns">
              <div className="column">
                <div class="logo is-size-3">
                  <Link to="/" >{config.siteTitle}</Link>
                  <small></small>

                </div>

              </div>
              <div className="column has-text-right has-text-centered-mobile is-size-4">
                  <span className="menu-link"><Link to="/" >about</Link></span>
                  <span className="menu-link"><Link to="/blog" >blog</Link></span>
              </div>

            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class Page404Template extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={`Page not found | ${config.siteTitle}`} />
        <section className="section">
          <Header />
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
                <div className="content">
                  <div class="title is-4">404 Page not found</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Helmet title={`About | ${config.siteTitle}`} />

        <section className="section">
          <Header />
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
                <div className="content">
                  <About />
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

export default AboutPage;

import React, { Component } from "react";
import Helmet from "react-helmet";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Project from "../components/Project/Project";
import config from "../../data/SiteConfig";
import Markdown from 'react-markdown';

class ProjectPage extends Component {

  render() {
    return (
      <div>
        <Helmet title={`Project | ${config.siteTitle}`} />

        <section className="section">
          <Header />
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
                <div className="content">

                  <Project />

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

export default ProjectPage;

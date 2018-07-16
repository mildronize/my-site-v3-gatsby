import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
      <section className="section">
        <div className="container">

          <div className="columns">
            <div className="column is-8-desktop is-offset-2-desktop">
              <div className="content">
                <Header />
                <Helmet title={config.siteTitle} />
                <SEO postEdges={postEdges} />
                <PostListing postEdges={postEdges} />
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



export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;

import React from "react";
import Helmet from "react-helmet";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <section className="section">
          <Header />
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">
                <div className="content">
                  <div class="title is-4">Posts Tagged as "{tag}"</div>
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

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

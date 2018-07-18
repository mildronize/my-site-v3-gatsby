import React from "react";
import Helmet from "react-helmet";
import dateformat from "dateformat";
// import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
// import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "gatsby-link";
import config from "../../data/SiteConfig";
import SideBar from "../components/SideBar/SideBar";
import getImageCdnUrl from "../utility";
// import "./post.css";


export default class PostTemplate extends React.Component {

  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    const date_display = dateformat(post.date, "longDate");

    var matches = [];
    var regex = /<img[^>]+src="([^">]+)"/ig;
    while (matches = regex.exec(postNode.html)) {
      postNode.html = postNode.html.replace(matches[1], getImageCdnUrl(matches[1]));
    }

    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        
        <section className="section">
          <Header />
          <div className="container">
            <div className="columns">
              <div className="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">

                <div className="content is-size-5 is-size-6-touch">

                  <div className="title is-size-4-mobile">{post.title}</div>
                  <div className="subtitle is-6">{date_display}</div>
                  <div><PostTags tags={post.tags} /></div>
                  <hr />
                  <div className="js-toc-content word-wrap" dangerouslySetInnerHTML={{ __html: postNode.html }} />
                  <div className="post-meta">
                    {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
                  </div>
                  {/* <UserInfo config={config} /> */}
                  <hr/>
                  <Disqus postNode={postNode} />
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
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;

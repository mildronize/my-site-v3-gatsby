import React from "react";
import Helmet from "react-helmet";
import dateformat from "dateformat";
// import UserInfo from "../components/UserInfo/UserInfo";
// import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
// import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Link from "gatsby-link";
import config from "../../data/SiteConfig";
import SideBar from "../components/SideBar/SideBar";
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

    const publish_img_url= function(image_url){
      return "https://"+config.cloudimg_io_token+".cloudimg.io/cdn/n/x/"+image_url;
    }

    var matches = [];
    var regex = /<img[^>]+src="([^">]+)"/ig;
    while (matches = regex.exec(postNode.html)) {
      postNode.html = postNode.html.replace(matches[1], publish_img_url(matches[1]));
    }

    return (
      <div>
          <section className="section">
          <div className="container">

            <div className="columns">
              <div className="column is-8-desktop is-9-tablet">
                <div className="content is-size-5 is-size-6-touch">

                  <Helmet>
                    <title>{`${post.title} | ${config.siteTitle}`}</title>
                  </Helmet>
                  <Header />
                  <SEO postPath={slug} postNode={postNode} postSEO />
                  
                  
                        <div className="title">{post.title}</div>
                        <div className="subtitle is-6">{date_display}</div>
                        <div><PostTags tags={post.tags} /></div>
                        <hr/>
                        <div className="js-toc-content word-wrap" dangerouslySetInnerHTML={{ __html: postNode.html }} />
                        <div className="post-meta">
                        
                        {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
                      </div>
                      {/* <UserInfo config={config} />
                      <Disqus postNode={postNode} /> */}
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

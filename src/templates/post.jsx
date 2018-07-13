import React from "react";
import Helmet from "react-helmet";
import dateformat from "dateformat";
// import UserInfo from "../components/UserInfo/UserInfo";
// import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
// import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
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

    return (
      <div>
        <SideBar/>
        <div className="container content sidebar-enable">
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <Header />
          <SEO postPath={slug} postNode={postNode} postSEO />
          
          <main>
            <article className="post">
                <h1 className="post-title">{post.title}</h1>
                <time className="post-date">{date_display}</time>
                <div className="js-toc-content word-wrap" dangerouslySetInnerHTML={{ __html: postNode.html }} />
                <div className="post-meta">
                <PostTags tags={post.tags} />
                {/* <SocialLinks postPath={slug} postNode={postNode} /> */}
              </div>
              {/* <UserInfo config={config} />
              <Disqus postNode={postNode} /> */}
            </article>

          </main>
        </div>

        
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

import React from "react";
import Helmet from "react-helmet";
import dateformat from "dateformat";
import tocbot from "tocbot";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import config from "../../data/SiteConfig";
// import "./post.css";
import { slide as Menu } from 'react-burger-menu'


export default class PostTemplate extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {isOpen: true, updateDimensions:null};
  }

  componentDidMount() {
    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3',
    });

    let updateDimensions = function(){
      if(typeof window !== 'undefined')
        if(window.innerWidth < 900)
          this.setState({isOpen:false, updateDimensions:updateDimensions});
        else
          this.setState({isOpen:true, updateDimensions:updateDimensions});
      else
        this.setState({isOpen:false, updateDimensions:updateDimensions});
    };
    window.addEventListener("resize", updateDimensions.bind(this));
  }

  updateDimensions() {
    // const windowGlobal = typeof window !== 'undefined' && window;
    // console.log(this.state.windowGlobal.innerWidth);
    // if(this.state.window.innerWidth < 900){
    //   this.setState({isOpen:false});
    // }else
    //   this.setState({isOpen:true});
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.state.updateDimensions);
  }

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
  
      <Menu noOverlay isOpen={ this.state.isOpen }>
          <nav className="toc js-toc"></nav>
        </Menu>

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
                <div className="js-toc-content" dangerouslySetInnerHTML={{ __html: postNode.html }} />
                <div className="post-meta">
                <PostTags tags={post.tags} />
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
              <UserInfo config={config} />
              <Disqus postNode={postNode} />
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

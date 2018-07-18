import React from "react";
import Link from "gatsby-link";
import dateformat from "dateformat";
import {getImageCdnThumbnailUrl, getImageUrlFromHtml, isImageInContent} from "../../utility";
// import  from "../../utility";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover?postEdge.node.frontmatter.cover:getImageUrlFromHtml(postEdge.node.html),
        title: postEdge.node.frontmatter.title,
        date: dateformat(postEdge.node.frontmatter.date, "longDate"),
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        html: postEdge.node.html
      });
    });
    return postList;
  }

  render() {
    const postList = this.getPostList();

    return (
      <div>
          {/* Your post list here. */
          postList.map( post => (
            <div>
            <div class="box">
                <div class="content">
                <div class="columns">
                  {post.cover && <div class="column is-4"><Link to={post.path} key={post.title}><img className="post-list" src={getImageCdnThumbnailUrl(post.cover)} /></Link></div>}
                  <div class="column">
                    <div class="title is-4"><Link to={post.path} key={post.title}>{post.title}</Link></div>
                    <div class="subtitle is-6">{post.date} | Read in {post.timeToRead} min</div>
                  </div>
                </div>
                </div>
            </div>
            <hr/>
            </div>
            ))
          }
          
      </div>
    );
  }
}


export default PostListing;

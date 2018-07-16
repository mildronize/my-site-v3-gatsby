import React from "react";
import Link from "gatsby-link";

class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div>
        {/* Your post list here. */
        postList.map(post => (
          <div class="box">
            <article class="media">
              <div class="media-left">
                <div class="image is-128x128">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
                </div>
              </div>
              <div class="media-content">
                <div class="content">
                    <div class="title is-4"><Link to={post.path} key={post.title}>{post.title}</Link></div>
                    <div class="subtitle is-6">{post.date}</div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    );
  }
}

export default PostListing;

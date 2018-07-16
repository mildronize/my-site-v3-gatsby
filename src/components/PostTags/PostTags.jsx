import React, { Component } from "react";
import _ from "lodash";
import Link from "gatsby-link";

class PostTags extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="tags">
        {tags &&
          tags.map(tag => (
            
              <span className="tag">
              <Link
                key={tag}
                to={`/tags/${_.kebabCase(tag)}`}>
                {tag}
                </Link>
            </span>
          ))}
      </div>
    );
  }
}

export default PostTags;

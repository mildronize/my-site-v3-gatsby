import React, { Component } from "react";
import "./UserLinks.css";
// Awesome font
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons'

class UserLinks extends Component {

  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;

    const aStyle = {
      color: '#4a4a4a',
      'margin': '8px'
    };

    library.add(faRss, faEnvelope, fab);

    return userLinks.map(link => (
      <div style={aStyle} >
        <a style={aStyle} href={link.url} >
          {labeled ? link.label : ""}
          <FontAwesomeIcon icon={link.iconClassName} size="2x"/>
        </a>
      </div>
    ));
  }
  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;

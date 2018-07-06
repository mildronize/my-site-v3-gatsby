import React, { Component } from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
import tocbot from "tocbot";
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';

class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false, updateDimensions:null}
  }
    
  componentDidMount() {
    // Auto open when open on desktop

    if(this.props.autoOpen){
      if(typeof window !== 'undefined')
        if(window.innerWidth < 900)
          this.setState({isOpen:false, updateDimensions:updateDimensions});
        else
          this.setState({isOpen:true, updateDimensions:updateDimensions});
      else
        this.setState({isOpen:false, updateDimensions:updateDimensions});  

      const updateDimensions = function(){
        if(typeof window !== 'undefined')
          if(window.innerWidth < 900)
            this.setState({isOpen:false, updateDimensions:updateDimensions});
          else
            this.setState({isOpen:true, updateDimensions:updateDimensions});
        else
          this.setState({isOpen:false, updateDimensions:updateDimensions});
      };
      window.addEventListener("resize", updateDimensions.bind(this));
      window.addEventListener("load", updateDimensions.bind(this));
    }

    tocbot.init({
      // Where to render the table of contents.
      tocSelector: '.js-toc',
      // Where to grab the headings to build the table of contents.
      contentSelector: '.js-toc-content',
      // Which headings to grab inside of the contentSelector element.
      headingSelector: 'h1, h2, h3',
    });
  }

  componentWillUnmount() {
    if(this.props.autoOpen){
      window.removeEventListener("resize", this.state.updateDimensions);
      window.removeEventListener("load", this.state.updateDimensions);
    }
  }

  render() {
    return (
      <div>        
        <Menu noOverlay isOpen={ this.state.isOpen }>
          <h2>
            <Link to="/" >{config.siteTitle}</Link>
          </h2>
          <hr/>
          <h3>Table of contents</h3>
          <nav className="toc js-toc"></nav>
        </Menu>
      </div>
    );
  }
}

SideBar.propTypes = {
  autoOpen: PropTypes.bool
};

SideBar.defaultProps = {
  autoOpen: false
};


export default SideBar;

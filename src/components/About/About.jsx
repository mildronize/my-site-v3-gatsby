import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <p><span className="title is-size-4">H</span>i, I'm Thada Wangthammang</p>
        <p>From Hatyai, Songkhla, Thailand</p>
        <h3>My Contributions</h3>
        <ul>
          <li>2016&nbsp;<a href="https://appdb.winehq.org/objectManager.php?sClass=version&amp;iId=33492" rel="nofollow">Submitted test result of installing&nbsp;</a><a href="http://www.lingoes.net/" rel="nofollow">Lingoes dictionary</a>&nbsp;on Debian via&nbsp;<a href="https://www.winehq.org/" rel="nofollow">Wine</a></li>
          <li>2015&nbsp;<a href="http://vim.rtorr.com/lang/th/" rel="nofollow">Translated a Vim cheat sheet in Thai</a></li>
        </ul>
        <h3>My Hobbies</h3>
        <ul>
          <li>Photography:&nbsp;<a href="https://www.flickr.com/photos/mildronize" rel="nofollow">Flickr</a>,&nbsp;<a href="https://instagram.com/mildronize/" rel="nofollow">Instagram</a>,&nbsp;<a href="http://www.shutterstock.com/g/mildronize" rel="nofollow">ShutterStock</a></li>
        </ul>

        <hr/>
        <div><a href="https://github.com/mildronize/website">Website Source</a></div>
        This site based on{" "}
        <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
          Gatsby Advanced Starter
            </a>
        <div>
          <a href="https://bulma.io">
            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
          </a>
        </div>

      </div>
    );
  }
}

export default About;

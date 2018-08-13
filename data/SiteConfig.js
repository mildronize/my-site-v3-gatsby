

module.exports = {
  blogPostDir: "/", // The name of directory that contains your posts.
  siteTitle: "mildronize", // Site title.
  siteTitleAlt: "Mildronize's Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-100.png", // Logo used for SEO and manifest.
  siteUrl: "https://dev.mildronize.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-62565035-2", // GA tracking ID.
  disqusShortname: "dev-mildronize", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Thada Wangthammang", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/mildronize",
      iconClassName: ['fab', 'github']
    },
    {
      label: "Twitter",
      url: "https://twitter.com/mildronize",
      iconClassName: ['fab', 'twitter']
    },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/thada-wangthammang-281894a6",
      iconClassName: ['fab', 'linkedin']
    },
    {
      label: "Email",
      url: "mailto:mildronize@gmail.com",
      iconClassName: "envelope"
    },
    {
      label: "Medium",
      url: "https://medium.com/@mildronize",
      iconClassName: ['fab', 'medium']
    },
    {
      label: "RSS",
      url: "https://dev.mildronize.com/rss.xml",
      iconClassName: "rss"
    }
  ],
  copyright: "Copyright © 2018 by Thada Wangthammang", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#1565C0", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff", // Used for setting manifest background color.
  cloudimg_io_token: "ce8be7dec"
};
module.exports = {
  pathPrefix: "/leonids",
  siteMetadata: {
    title: `Mateusz Puczyński`,
    author: {
      name: `@aerfio`,
      summary: `web dev`,
    },
    description: `A simple, fixed sidebar two columns Gatsby.js blog starter.`,
    siteUrl: `https://aerfio-blog.netlify.app`,
    defaultImage: "images/bg.jpeg",
  },
  plugins: [
    // https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/?=remark
    // https://www.gatsbyjs.com/plugins/gatsby-remark-external-links/?=remark
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              withWebp: true,
              quality: 85,
              tracedSVG: false,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge =>
                Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                }),
              ),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Personal blog of Mateusz Puczyński",
          },
        ],
      },
    },

    //  todo: add gatsby plugin sitemap
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal blog of Mateusz Puczyński`,
        short_name: `Mateusz Puczyński blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/custom-logo.png`, // This path is relative to the root of the site.
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",

    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // Configure SASS to process Tailwind
        postCssPlugins: [require("tailwindcss")],
      },
    },
    "gatsby-plugin-postcss",
    // {
    //   // this doesn't seem to work -> further inspect why
    //   resolve: `gatsby-plugin-minify-classnames`,
    //   options: {
    //     dictionary: "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789",
    //     enableOnDevelopment: false,
    //   },
    // },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-uninline-styles",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        openAnalyzer: false,
        reportFilename: "../build-reports/report.html",
      },
    },
  ],
};

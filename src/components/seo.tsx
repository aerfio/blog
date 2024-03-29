import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { SEOProps, SiteProps } from "../types";

const SEO: React.FunctionComponent<SEOProps> = ({
  description = "",
  lang = "en",
  meta = [],
  title = "",
}) => {
  const { site } = useStaticQuery<SiteProps>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;

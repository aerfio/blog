import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image, { GatsbyImageFixedProps } from "gatsby-image";
import { SiteProps } from "../types";

const Bio: React.FC = () => {
  const data = useStaticQuery<
    SiteProps & { avatar: { childImageSharp: GatsbyImageFixedProps } }
  >(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        // marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          // marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
    </div>
  );
};

export default Bio;

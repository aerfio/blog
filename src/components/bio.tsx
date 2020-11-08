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
    <div className="flex">
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        className="mb-0 "
        // style={{minWidth: 50}}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
    </div>
  );
};

export default Bio;

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";
import { SiteProps } from "../types";

const Bio: React.FC = () => {
  const data = useStaticQuery<
    SiteProps & { avatar: { childImageSharp: GatsbyImageProps } }
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
      <GatsbyImage
        image={data.avatar.childImageSharp.image}
        // fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        className="mb-0"
        // style={{minWidth: 50}}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
    </div>
  );
};

export default Bio;

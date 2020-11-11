import React from "react";
import { PageProps, Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

import { SiteProps } from "../types";

type PageContext = {
  currentPage: number;
  numPages: number;
};

interface BlogIndexProps {
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
        fields: {
          slug: string;
        };
      };
    }[];
  };
}

const BlogIndex: React.FunctionComponent<PageProps<
  BlogIndexProps & SiteProps,
  PageContext
>> = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;
  const { currentPage, numPages } = pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout title={siteTitle}>
      <SEO title="All posts" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3 className="text-accent mt-10 text-3xl font-semibold">
                <Link className="shadow-none" to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small className="text-secondary-text">
                {node.frontmatter.date}
              </small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
                className="mb-5 text-main-text"
              />
            </section>
          </article>
        );
      })}

      <nav>
        <ul className="flex flex-wrap justify-between list-none p-0">
          <li>
            {!isFirst && (
              <Link to={prevPage} rel="prev" className="blog-link text-lg">
                ← Previous Page
              </Link>
            )}
          </li>
          <li>
            {!isLast && (
              <Link to={nextPage} rel="next" className="blog-link">
                Next Page →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

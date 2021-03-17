import React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { BlogPostTemplateProps, BlogPostTemplateContextProps } from "../types";

import "./blog-post.scss";
import "./prismjs-light.scss";
import "./prismjs-dark.scss";

const BlogPostTemplate: React.FunctionComponent<PageProps<
  BlogPostTemplateProps,
  BlogPostTemplateContextProps
>> = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  const { previous, next } = pageContext;

  return (
    <Layout title="Home">
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1 className="mt-6 text-accent text-5xl font-medium">
            {post.frontmatter.title}
          </h1>
          <p className="mb-6 block text-main-text">{post.frontmatter.date}</p>
        </header>
        <section
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {Array.isArray(post.frontmatter.sources) &&
        post.frontmatter.sources.length > 0 ? (
          <>
            <h4 className="text-main-text">Sources:</h4>
            <ol className="list-decimal ml-5 text-main-text pb-2">
              {post.frontmatter.sources.map(elem => (
                <li
                  key={elem}
                  className="underline hover:no-underline break-words"
                >
                  <a href={elem} rel="noreferrer nofollow noopener">
                    {elem}
                  </a>
                </li>
              ))}
            </ol>
          </>
        ) : null}

        <hr />
      </article>

      <nav className="pt-4">
        <ul className="flex flex-wrap list-type-none p-0 justify-between">
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev" className="blog-link">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next" className="blog-link">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        sources
      }
    }
  }
`;

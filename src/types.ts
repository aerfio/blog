export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title: string;
}

export interface SiteProps {
  site: {
    siteMetadata: {
      title: string;
      author: {
        name: string;
        summary: string;
      };
      description: string;
      siteUrl: string;
    };
  };
}

interface MarkdownRemark extends BlogPost {
  id: string;
  excerpt: string;
  html: string;
}

export interface BlogPostTemplateProps {
  markdownRemark: MarkdownRemark;
}
export interface BlogPostTemplateContextProps {
  previous: BlogPost;
  next: BlogPost;
}

export interface BlogPost {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    sources?: string[];
  };
  fields: {
    slug: string;
  };
}

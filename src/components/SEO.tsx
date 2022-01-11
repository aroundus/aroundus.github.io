import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface Data {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEO = (props: SEOProps) => {
  const { site }: Data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const title = props.title || site.siteMetadata.title;
  const description = props.description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ko',
      }}
      defaultTitle={site.siteMetadata.title}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: props.image,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/sf-mono',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/gitalk@1.7.2/dist/gitalk.css',
        },
      ]}
    />
  );
};

export default SEO;

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
          property: 'og:type',
          content: 'website',
        },
      ]}
      link={[
        {
          rel: 'stylesheet',
          href: 'http://fonts.cdnfonts.com/css/sf-mono',
        },
      ]}
    />
  );
};

export default SEO;

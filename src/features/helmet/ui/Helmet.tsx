import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet-async';
import { graphql, useStaticQuery } from 'gatsby';

interface Data {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
    };
  };
}

interface HelmetProps {
  path?: string;
  title?: string;
  description?: string;
  image?: string;
}

export function Helmet(props: HelmetProps) {
  const { site }: Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `);

  const title = props.title || site.siteMetadata.title;
  const description = props.description || site.siteMetadata.description;
  const domain = process.env.SITE_DOMAIN;
  const url = `https://${domain}${props.path || ''}`;

  return (
    <ReactHelmet
      defaultTitle={site.siteMetadata.title}
      htmlAttributes={{
        lang: 'ko',
      }}
      link={[{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/gitalk@1.7.2/dist/gitalk.css' }]}
      meta={[
        { name: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: url },
        { property: 'og:image', content: props.image },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: domain },
        { property: 'twitter:url', content: url },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: description },
        { property: 'twitter:image', content: props.image },
      ]}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
    />
  );
}

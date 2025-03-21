import React from 'react';

import PropTypes from 'prop-types';

const title = process.env.GATSBY_TITLE;
const description = process.env.GATSBY_DESCRIPTION;
const domain = process.env.SITE_DOMAIN;

const HTML = (props) => {
  let isTitleEmpty = true;
  let isDescriptionEmpty = true;
  let isOpenGraphEmpty = true;

  props.headComponents.forEach((component) => {
    if (component.type === 'title') {
      isTitleEmpty = false;
    }

    if (component.props?.name === 'description') {
      isDescriptionEmpty = false;
    }

    if (isOpenGraphEmpty && component.props?.property?.startsWith('og')) {
      isOpenGraphEmpty = false;
    }
  });

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="UTF-8" />
        <meta
          content="IE=edge, chrome=1"
          httpEquiv="X-UA-Compatible"
        />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
        <meta
          content={process.env.GOOGLE_SITE_VERIFICATION}
          name="google-site-verification"
        />
        <meta
          content={process.env.NAVER_SITE_VERIFICATION}
          name="naver-site-verification"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/static/split/WantedSans.min.css"
          rel="stylesheet"
        />

        {isTitleEmpty && <title>{title}</title>}
        {isDescriptionEmpty && (
          <meta
            content={description}
            name="description"
          />
        )}
        {isOpenGraphEmpty && (
          <>
            <meta
              content={`https://${domain}`}
              property="og:url"
            />
            <meta
              content="website"
              property="og:type"
            />
            <meta
              content={title}
              property="og:title"
            />
            <meta
              content={description}
              property="og:description"
            />
            <meta
              content="/aroundus.jpg"
              property="og:image"
            />
            <meta
              content="summary_large_image"
              name="twitter:card"
            />
            <meta
              content={domain}
              property="twitter:domain"
            />
            <meta
              content={`https://${domain}`}
              property="twitter:url"
            />
            <meta
              content={title}
              name="twitter:title"
            />
            <meta
              content={description}
              name="twitter:description"
            />
            <meta
              content="/aroundus.jpg"
              name="twitter:image"
            />
          </>
        )}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          dangerouslySetInnerHTML={{ __html: props.body }}
          id="___gatsby"
          key="body"
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

HTML.propTypes = {
  body: PropTypes.string,
  bodyAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  htmlAttributes: PropTypes.object,
  postBodyComponents: PropTypes.array,
  preBodyComponents: PropTypes.array,
};

export default HTML;

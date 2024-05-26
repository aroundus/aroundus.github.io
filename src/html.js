/* eslint-disable */
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
          httpEquiv="X-UA-Compatible"
          content="IE=edge, chrome=1"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content={process.env.GOOGLE_SITE_VERIFICATION}
        />
        <meta
          name="naver-site-verification"
          content={process.env.NAVER_SITE_VERIFICATION}
        />

        {isTitleEmpty && <title>{title}</title>}
        {isDescriptionEmpty && (
          <meta
            name="description"
            content={description}
          />
        )}
        {isOpenGraphEmpty && (
          <>
            <meta
              property="og:url"
              content={`https://${domain}`}
            />
            <meta
              property="og:type"
              content="website"
            />
            <meta
              property="og:title"
              content={title}
            />
            <meta
              property="og:description"
              content={description}
            />
            <meta
              property="og:image"
              content="/aroundus.jpg"
            />
            <meta
              name="twitter:card"
              content="summary_large_image"
            />
            <meta
              property="twitter:domain"
              content={domain}
            />
            <meta
              property="twitter:url"
              content={`https://${domain}`}
            />
            <meta
              name="twitter:title"
              content={title}
            />
            <meta
              name="twitter:description"
              content={description}
            />
            <meta
              name="twitter:image"
              content="/aroundus.jpg"
            />
          </>
        )}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
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

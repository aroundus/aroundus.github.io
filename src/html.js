import React from 'react';
import PropTypes from 'prop-types';

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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {isTitleEmpty && <title>AROUND US</title>}
        {isDescriptionEmpty && <meta name="description" content="Coding everything AROUND US" />}
        {isOpenGraphEmpty && (
          <>
            <meta property="og:url" content="https://aroundus.github.io" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="AROUND US" />
            <meta property="og:description" content="Coding everything AROUND US" />
            <meta property="og:image" content="/aroundus.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content="aroundus.github.io" />
            <meta property="twitter:url" content="https://aroundus.github.io" />
            <meta name="twitter:title" content="AROUND US" />
            <meta name="twitter:description" content="Coding everything AROUND US" />
            <meta name="twitter:image" content="/aroundus.jpg" />
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
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};

export default HTML;

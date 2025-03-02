import React from 'react';

import { Helmet as ReactHelmet } from 'react-helmet-async';

export function Helmet() {
  return (
    <ReactHelmet
      meta={[
        { name: 'description', content: '프론트엔드 개발자를 위한 티스토리 템플릿' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Tistory with React' },
        { property: 'og:description', content: '프론트엔드 개발자를 위한 티스토리 템플릿' },
        { property: 'og:url', content: 'https://aroundus.github.io/tistory-with-react' },
        { property: 'og:image', content: '/tistory-with-react.jpg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: 'aroundus.github.io' },
        { property: 'twitter:url', content: 'https://aroundus.github.io/tistory-with-react' },
        { property: 'twitter:title', content: 'Tistory with React' },
        { property: 'twitter:description', content: '프론트엔드 개발자를 위한 티스토리 템플릿' },
        { property: 'twitter:image', content: '/tistory-with-react.jpg' },
      ]}
      title="Tistory with React"
    />
  );
}

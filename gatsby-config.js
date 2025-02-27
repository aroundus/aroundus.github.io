const dotenv = require('dotenv');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

// WHY: 한글 적용 불가
const lunrKoreanPlugin = (lunr) => (builder) => {
  builder.pipeline.remove(lunr.stemmer);
  builder.searchPipeline.remove(lunr.stemmer);
};

let plugins = [
  {
    resolve: 'gatsby-plugin-typescript',
    options: {
      allExtensions: true, // defaults to false
      isTSX: true, // defaults to false
      jsxPragma: 'jsx', // defaults to "React"
    },
  },
  'gatsby-plugin-tsconfig-paths',
  'gatsby-plugin-sass',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-image',

  /**
   * gatsby-plugin-sharp
   *
   * Sharp 이미지 처리 라이브러리 Wrapper
   * 웹 해상도별로 이미지 크기를 조절하여 웹 성능을 개선하고 회전, 감마 처리 등의 여러 가지 기능을 수행합니다.
   */
  'gatsby-plugin-sharp',

  /**
   * gatsby-source-filesystem
   *
   * 설정한 폴더의 파일 관리
   */
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'articles',
      path: `${__dirname}/articles`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/assets/images`,
    },
  },

  /**
   * gatsby-plugin-page-creator
   *
   * src/pages 폴더 내 파일들을 페이지로 변환
   */
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: `${__dirname}/src/pages`,
      ignore: ['**/_*/**'], // 언더스코어(_)로 시작하는 폴더를 라우트에서 제외
    },
  },

  /**
   * gatsby-transformer-remark
   *
   * 마크다운 파일 해석 및 HTML 변환
   */
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-autolink-headers',
          options: {
            className: 'icon-heading-link',
            elements: ['h2', 'h3'],
            icon: '<svg viewBox="0 0 24 24" height="24" aria-hidden="true"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>',
            isIconAfterHeader: true,
            maintainCase: true,
            removeAccents: true,
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            disableBgImage: true,
            markdownCaptions: true,
            maxWidth: 1920,
            quality: 100,
            showCaptions: true,
          },
        },
        {
          resolve: 'gatsby-remark-responsive-iframe',
          options: {
            wrapperStyle: 'margin-bottom: 1.0725rem',
          },
        },
        {
          resolve: 'gatsby-remark-mermaid',
          options: {
            mermaidOptions: {
              fontFamily: 'Pretendard, "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, sans-serif',
              flowchart: {
                nodeSpacing: 100,
                padding: 50,
                rankSpacing: 80,
                useMaxWidth: false,
              },
            },
          },
        },
        {
          resolve: 'gatsby-remark-code-buttons',
          options: {
            svgIcon:
              '<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>',
            toasterText: '코드 내용을 복사하였습니다.',
          },
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            aliases: {},
            showLineNumbers: true,
            noInlineHighlight: true,
            prompt: {
              global: false,
              host: 'localhost',
              user: 'user',
            },
          },
        },
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-smartypants',
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-lunr',
    options: {
      languages: [
        {
          name: 'ko',
          plugins: [lunrKoreanPlugin],
          filterNodes: (node) => node.frontmatter && !node.frontmatter.draft,
        },
      ],
      fields: [
        { name: 'category', store: true },
        { name: 'date', store: true },
        { name: 'description', store: true, attributes: { boost: 5 } },
        { name: 'path', store: true },
        { name: 'title', store: true, attributes: { boost: 10 } },
      ],
      resolvers: {
        MarkdownRemark: {
          category: (node) => node.frontmatter.category,
          date: (node) => node.frontmatter.date,
          description: (node) => node.frontmatter.description,
          draft: (node) => node.frontmatter.draft,
          path: (node) => node.fields.slug,
          title: (node) => node.frontmatter.title,
        },
      },
    },
  },
  {
    resolve: 'gatsby-plugin-gitalk',
    options: {
      config: {
        admin: [process.env.GITHUB_USER_NAME],
        clientID: process.env.GITALK_GITHUB_CLIENT_ID,
        clientSecret: process.env.GITALK_GITHUB_CLIENT_SECRET,
        owner: process.env.GITHUB_USER_NAME,
        repo: process.env.SITE_DOMAIN,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      resolveSiteUrl: () => `https://${process.env.SITE_DOMAIN}`,
    },
  },
];

if (isProduction) {
  plugins = plugins.concat([
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_CONTAINER_ID,
      },
    },
  ]);
}

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    author: {
      email: 'specialguest@kakao.com',
      name: '백은주 Sara',
      summary: 'Frontend Developer @wadiz',
      url: {
        github: `https://github.com/${process.env.GITHUB_USER_NAME}`,
        instagram: 'https://www.instagram.com/everything.is.meaningful',
      },
    },
    description: process.env.GATSBY_DESCRIPTION,
    image: '/aroundus.jpg',
    siteUrl: `https://${process.env.SITE_DOMAIN}`,
    title: `${process.env.GATSBY_TITLE}`,
  },
  plugins,
};

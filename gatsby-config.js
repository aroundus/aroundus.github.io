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
      isTSX: true, // defaults to false
      jsxPragma: 'jsx', // defaults to "React"
      allExtensions: true, // defaults to false
    },
  },
  {
    resolve: 'gatsby-plugin-alias-imports',
    options: {
      alias: {
        '~assets': path.resolve(__dirname, './src/assets'),
        '~components': path.resolve(__dirname, './src/components'),
        '~constants': path.resolve(__dirname, './src/constants'),
        '~containers': path.resolve(__dirname, './src/containers'),
        '~helpers': path.resolve(__dirname, './src/helpers'),
        '~pages': path.resolve(__dirname, './src/pages'),
        '~services': path.resolve(__dirname, './src/services'),
        '~shared': path.resolve(__dirname, './src/shared'),
        '~states': path.resolve(__dirname, './src/states'),
        '~types': path.resolve(__dirname, './src/types'),
        '~validations': path.resolve(__dirname, './src/validations'),
        '~views': path.resolve(__dirname, './src/views'),
      },
      extensions: ['ts', 'tsx'],
    },
  },
  'gatsby-plugin-sass',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-image',

  /**
   * gatsby-plugin-sharp
   *
   * Sharp 이미지 처리 라이브러리 Wrapper
   * 웹 해상도별로 이미지 크기를 조절하여 웹 성능을 개선하고 회전, 감마 처리 등의 여러 가지 기능을 수행한다.
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
      name: 'post',
      path: `${__dirname}/posts`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/assets/images`,
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
            icon: '<svg viewBox="0 0 24 24" height="24" aria-hidden="true"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg>',
            className: 'icon-heading-link',
            maintainCase: true,
            removeAccents: true,
            isIconAfterHeader: true,
            elements: ['h2', 'h3'],
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1920,
            showCaptions: true,
            markdownCaptions: true,
            quality: 100,
            disableBgImage: true,
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
                rankSpacing: 80,
                padding: 50,
                useMaxWidth: false,
              },
            },
          },
        },
        {
          resolve: 'gatsby-remark-code-buttons',
          options: {
            svgIcon: '<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg>',
            toasterText: '코드 내용을 복사하였습니다.',
          },
        },
        {
          resolve: 'gatsby-remark-prismjs',
          options: {
            classPrefix: 'language-',
            aliases: {
            },
            showLineNumbers: true,
            noInlineHighlight: true,
            prompt: {
              user: 'user',
              host: 'localhost',
              global: false,
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
        { name: 'title', store: true, attributes: { boost: 10 } },
        { name: 'description', store: true, attributes: { boost: 5 } },
        { name: 'date', store: true },
        { name: 'path', store: true },
      ],
      resolvers: {
        MarkdownRemark: {
          category: (node) => node.frontmatter.category,
          title: (node) => node.frontmatter.title,
          description: (node) => node.frontmatter.description,
          date: (node) => node.frontmatter.date,
          draft: (node) => node.frontmatter.draft,
          path: (node) => node.fields.slug,
        },
      },
    },
  },
  {
    resolve: 'gatsby-plugin-gitalk',
    options: {
      config: {
        clientID: process.env.GITALK_GITHUB_CLIENT_ID,
        clientSecret: process.env.GITALK_GITHUB_CLIENT_SECRET,
        repo: process.env.SITE_DOMAIN,
        owner: process.env.GITHUB_USER_NAME,
        admin: [process.env.GITHUB_USER_NAME],
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
    siteUrl: `https://${process.env.SITE_DOMAIN}`,
    title: `${process.env.GATSBY_TITLE} | ${process.env.GATSBY_DESCRIPTION}`,
    author: {
      name: '백은주 sally',
      summary: 'Frontend Developer @wadiz',
      email: 'specialguest@kakao.com',
      url: {
        github: `https://github.com/${process.env.GITHUB_USER_NAME}`,
        instagram: 'https://www.instagram.com/everything.is.meaningful',
      }
    },
    description: process.env.GATSBY_DESCRIPTION,
    image: '/aroundus.jpg',
  },
  plugins,
};

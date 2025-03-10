# aroundus.github.io

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Faroundus%2Faroundus.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Hits&edge_flat=false)](https://hits.seeyoufarm.com)
![Gatsby](https://img.shields.io/badge/5.13.5-black?&label=Gatsby&labelColor=663399&logo=Gatsby&logoColor=white)
![GraphQL](https://img.shields.io/badge/16.7.1-black?&label=GraphQL&labelColor=E10098&logo=GraphQL&logoColor=white)
![MUI](https://img.shields.io/badge/5.15.18-black?&label=MUI&labelColor=007FFF&logo=MUI&logoColor=white)
![Node.js](https://img.shields.io/badge/20.13.1-black?&label=Node.js&labelColor=2C682C&logo=Node.js&logoColor=white)
![React](https://img.shields.io/badge/18.3.1-black?&label=React&labelColor=087EBF&logo=React&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/5.4.5-black?&label=TypeScript&labelColor=007ACC&logo=TypeScript&logoColor=white)

## 목차

1. [소개](#소개)
2. [사용 기술](#사용-기술)
3. [설치 및 실행](#설치-및-실행)
4. [빌드 및 확인](#빌드-및-확인)
5. [기능](#기능)
6. [프로젝트 구조](#프로젝트-구조)
7. [배포](#배포)
8. [팀원](#팀원)

## 소개

![대표 이미지](https://github.com/aroundus/aroundus.github.io/assets/16731356/97ee5c88-be54-4176-a0de-c8b823bc9b1b)

이 블로그는 React를 지원하고 GraphQL을 공부할 수 있는 Gatsby 프레임워크로 만들었습니다. 프론트엔드 개발자의 경험과 지식을 공유하는 게시물을 작성하고 있습니다.

## 사용 기술

### 프론트엔드

- 프로그래밍 언어: TypeScript
- 프레임워크: [Gatsby(개츠비)](https://www.gatsbyjs.com)
- 라이브러리: MUI

### 백엔드

- 데이터베이스: GraphQL (in Gatsby)

### 데브옵스

- CI/CD: GitHub Actions
- 호스팅: [GitHub Pages](https://pages.github.com)

## 설치 및 실행

```shell
nvm use
yarn install
yarn start
```

GraphQL은 특별한 설치 없이 Gatsby에서 사용할 수 있습니다. `yarn start` 명령어를 실행하면 스키마를 자동으로 추론하여 생성합니다. 자세한 정보는 [GraphQL API](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/graphql-api/) 내용을 참조해 주세요.

<details>
  <summary>GraphQL Explorer (예시)</summary>
  <img alt="GraphQL Explorer" src="https://github.com/aroundus/aroundus.github.io/assets/16731356/4c5ead93-15e8-424f-b9a1-930c49c2de64" />
</details>

## 빌드 및 확인

```shell
yarn build
yarn serve
```

## 테스트

```shell
yarn run test
yarn run test:watch
```

## 기능

### 게시물 검색

[Lunr(루나)](https://lunrjs.com)는 자바스크립트 기반의 클라이언트 측 검색 엔진입니다. 웹사이트나 웹 애플리케이션에 빠르고 효율적인 검색 기능을 추가하는 데 사용할 수 있습니다. Gatsby 플러그인을 지원합니다. (`gatsby-plugin-lunr`)

### 게시물 댓글

[Gitalk(깃톡)](https://github.com/gitalk/gitalk)은 GitHub 이슈 기반의 댓글 서비스입니다. 블로그의 모든 게시물을 저장소의 이슈로 생성하고 이슈의 댓글을 블로그 게시물 댓글과 연동해 줍니다. Gatsby 플러그인을 지원합니다. (`gatsby-plugin-gitalk`)

## 프로젝트 구조

[FSD(Feature-Sliced Design)](https://feature-sliced.design) 아키텍처 방법론을 기반으로 구성하였습니다. 다만, pages 폴더의 경우 Next.js 15 라우팅 방식을 채택하였습니다.

```plaintext
.
├── articles
├── scripts
│   └── lunr.js
└── src
    ├── app
    │   └── lib
    │       ├── ArticlePageTemplate.tsx // 게시물 페이지 템플릿
    │       └── GatsbyNode.ts // 게시물 페이지를 생성하는 스크립트
    ├── features
    ├── pages
    │   └── (home)
    │       └── HomePage.tsx // 메인 페이지
    ├── shared
    └── widgets
```

- **articles**: 블로그의 게시물을 담는 폴더
- **src/pages**: 블로그의 페이지를 관리하는 폴더

### articles

블로그의 게시물을 관리합니다.

#### `gatsby-config.js`

```javascript
{
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'articles',
    path: `${__dirname}/articles`,
  },
},
```

#### `gatsby-node.ts`

```typescript
createNodeField({
  name: 'slug',
  node,
  value: `/articles${value}`,
});
```

### [scripts/lunr.js](scripts/lunr.js)

Lunr의 한글 적용이 불가한 문제를 해결하기 위하여 [@eastuni/lunr-languages-ko/lunr.ko.js](https://github.com/eastuni/lunr-languages/blob/master/lunr.ko.js) 파일을 주입하는 스크립트를 작성하였습니다.

### src/pages

`gatsby-plugin-page-creator` 플러그인이 `src/pages` 폴더의 모든 파일을 자동으로 페이지로 변환합니다. ArticleTemplate 컴포넌트는 게시물 페이지를 생성하는 템플릿 컴포넌트로 `src/pages` 폴더에 넣지 않습니다.

<details>
  <summary>메인 페이지</summary>
  <img alt="메인 페이지" src="https://github.com/aroundus/aroundus.github.io/assets/16731356/4c094559-3834-4812-b854-34d90e2fcd5e" />
</details>
<details>
  <summary>게시물 페이지</summary>
  <img alt="게시물 페이지" src="https://github.com/aroundus/aroundus.github.io/assets/16731356/8d419468-b0aa-41f4-a443-23535e18a96b" />
</details>

## 배포

![GitHub Pages](https://github.com/aroundus/aroundus.github.io/assets/16731356/ed2f3814-d99a-4866-bd13-d979ddca9f9c)

작업 내용을 main 브랜치에 병합하면 [Deploy Gatsby site to Pages](.github/workflows/deploy-gatsby-site-to-pages.yml) 워크플로를 트리거하여 CI/CD를 진행합니다.

- `CI`: 자동화 프로세스의 지속적인 통합(Continuous Integration)
- `CD`: 지속적인 서비스 제공(Continuous Delivery) 또는 지속적인 배포(Continuous Deployment)

![GitHub Actions](https://github.com/aroundus/aroundus.github.io/assets/16731356/6f23c5b2-545d-4a7c-b4b1-72151a5f6934)

### feature 브랜치에서 배포할 경우

main 브랜치가 아닌 feature 브랜치 작업 내용을 로컬 환경에서 빠르게 배포하고 싶다면 다음 명령어를 실행합니다. 단, `.env` 파일에 프로덕션 환경 변수에 대한 정보가 있어야 합니다.

```shell
yarn build // CI
yarn deploy // CD
```

## 팀원

|                                                                                         | 이름                                  | 역할            |
| :-------------------------------------------------------------------------------------: | ------------------------------------- | --------------- |
| <img alt="백은주" height="40" src="https://avatars.githubusercontent.com/u/16731356" /> | [백은주](https://github.com/aroundus) | 프론트엔드 개발 |
|            <img alt="진국이" height="40" src="assets/images/zingugi.png" />             | 진국이                                | 프론트엔드 개발 |
|               <img alt="지니" height="40" src="assets/images/jini.png" />               | 지니                                  | 백엔드 개발     |
|               <img alt="조이" height="40" src="assets/images/joy.png" />                | 조이                                  | 백엔드 개발     |
|               <img alt="스토" height="40" src="assets/images/sto.png" />                | 스토                                  | 데브옵스 개발   |

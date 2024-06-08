---
category: developer
index: 3
title: Node Sass -> Dart Sass 환경 전환 (Feat. CRACO + Scoped CSS)
description: Sass 코어 팀에서 Node Sass 지원 중단을 공식적으로 선언하였습니다. Node Sass의 기반인 LibSass가 Sass의 최신 기능을 반영하는 데 한계에 도달했기 때문입니다. CRACO 프로젝트에서 Dart Sass로 전환하는 방법은 간단합니다.
image: https://cdn.pixabay.com/photo/2023/04/23/11/11/flowers-7945521_960_720.jpg
date: 2023-05-10
---

> **CRACO**(Create React App Configuration Override) + **Scoped CSS** 프로젝트 기준으로 설명합니다.

# Dart Sass

자세한 정보는 [LibSass is Deprecated](https://sass-lang.com/blog/libsass-is-deprecated/) 내용을 참조해 주세요.

## package.json

```diff
- "node-sass": "^5.0.0",
+ "sass": "^1.57.1",
```

## craco.config.js

sass-loader 옵션에서 implementation node-sass 기본값을 sass로 변경합니다. 자세한 정보는 [Use Dart Sass](https://craco.js.org/recipes/use-dart-sass/) 내용을 참조해 주세요.

```diff
style: {
    ...
    sass: {
      loaderOptions: (sassLoaderOptions) => ({
        ...sassLoaderOptions,
+       implementation: require('sass'),
      }),
    },
  },
```

## Deep 결합자 변경

Dart Sass의 경우 기존 /deep/ 결합자의 구문을 분석할 수 없어 컴파일 가능한 결합자로 수정해야 합니다. *.scoped.scss 파일 내 Deep 결합자를 다음과 같이 변경합니다.

```diff
- /deep/ .element {
+ ::v-deep .element {
}
```

## stylelint.config.js

Deep 결합자를 변경한 후 Stylelint에서 알 수 없는 의사 요소(pseudo-element)로 간주하여 오류가 발생하지 않도록 다음과 같이 설정합니다.

```diff
module.exports = {
  ...
+  rules: {
+    'selector-pseudo-element-no-unknown': [
+      true,
+      {
+        ignorePseudoElements: ['v-deep'],
+      },
+    ],
+  },
};
```

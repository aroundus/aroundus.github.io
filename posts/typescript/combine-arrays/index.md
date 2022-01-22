---
category: typescript
index: 2
title: 두 배열의 모든 조합으로 구성된 배열 만들기
description: 배열 A와 배열 B를 조합한 전체 목록을 만들어 봅시다. 각 조합은 A의 한 요소와 B의 한 요소의 튜플로 구성해야 합니다.
date: 2022-01-23
---

## Question

상품 옵션을 구성하고 각 옵션을 조합한 모든 목록을 만들어서 화면에 구성하세요. 옵션은 2개 이상 구성할 수 있어야 합니다. 예시는 다음과 같습니다.

```typescript
const A = ['블랙', '그레이', '베이지'];
const B = ['S', 'M', 'L'];

----------

[
  [ '블랙', 'S' ],
  [ '블랙', 'M' ],
  [ '블랙', 'L' ],
  [ '그레이', 'S' ],
  [ '그레이', 'M' ],
  [ '그레이', 'L' ],
  [ '베이지', 'S' ],
  [ '베이지', 'M' ],
  [ '베이지', 'L' ],
]
```

```typescript
const A = ['티셔츠', '바지'];
const B = ['블랙', '그레이', '베이지'];
const C = ['S', 'M', 'L'];

----------

[
  ['티셔츠', '블랙', 'S'],
  ['티셔츠', '블랙', 'M'],
  ['티셔츠', '블랙', 'L'],
  ['티셔츠', '그레이', 'S'],
  ['티셔츠', '그레이', 'M'],
  ['티셔츠', '그레이', 'L'],
  ['티셔츠', '베이지', 'S'],
  ['티셔츠', '베이지', 'M'],
  ['티셔츠', '베이지', 'L'],
  ['바지', '블랙', 'S'],
  ['바지', '블랙', 'M'],
  ['바지', '블랙', 'L'],
  ['바지', '그레이', 'S'],
  ['바지', '그레이', 'M'],
  ['바지', '그레이', 'L'],
  ['바지', '베이지', 'S'],
  ['바지', '베이지', 'M'],
  ['바지', '베이지', 'L'],
]
```

## Answer

```typescript
const combineArrays = <T extends unknown>(...arrays: T[][]): T[] | T[][] => {
  const combinations: T[] = [];

  if (arrays.length === 0) return [];
  if (arrays.length === 1) return arrays[0];

  if (arrays.length === 2) {
    arrays[0].forEach((value1) => {
      arrays[1].forEach((value2) => {
        combinations.push([value1, value2].flat() as unknown as T);
      });
    });

    return combinations;
  }

  return combineArrays(arrays[0], combineArrays(...arrays.slice(1)) as T[]);
};
```

## Playground 🚀

<iframe height="600" style="width: 100%;" scrolling="no" title="Combine Arrays" src="https://codepen.io/aroundus/embed/BawXKZa?default-tab=js%2Cresult&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/aroundus/pen/BawXKZa">
  Combine Arrays</a> by Sally (<a href="https://codepen.io/aroundus">@aroundus</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

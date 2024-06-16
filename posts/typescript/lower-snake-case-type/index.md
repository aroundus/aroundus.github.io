---
category: typescript
index: 4
title: LowerSnakeCase Utility Type 만들기
description: camelCase를 lower_snake_case로 변환합니다. 근데 isCTAButton과 같은 연속적인 축약어 대문자도 is_cta_button으로 변환할 수 있어야 합니다.
date: 2024-06-09
---

# 시작하기

`UPPER_SNAKE_CASE` 상수만 정의하면 자동으로 `camelCase` 타입까지 만들 수 있어요.

```typescript
function convertLowerSnakeCase(value: string) {
  return value
    .replace(/([a-z])([A-Z]+)/g, '$1_$2')
    .replace(/([A-Z])([A-Z])([a-z]+)/g, '$1_$2$3')
    .toLowerCase();
}

type Separator = ' ' | '-' | '_';

type SnakeCase<T extends string> = T extends `${infer Char1}${infer Char2}${infer Rest}`
  ? `${Char1}${Char2}` extends `${Lowercase<Char1>}${Uppercase<Char2>}`
    ? `${Char1}_${SnakeCase<`${Char2}${Rest}`>}`
    : `${Char1}${SnakeCase<`${Char2}${Rest}`>}`
  : T;

type AbbreviationSnakeCase<T extends string> = T extends `${infer Char1}${infer Char2}${infer Char3}${infer Rest}`
  ? Char1 extends Separator
    ? `${Char1}${AbbreviationSnakeCase<`${Char2}${Char3}${Rest}`>}`
    : `${Char1}${Char2}${Char3}` extends `${Uppercase<Char1>}${Uppercase<Char2>}${Lowercase<Char3>}`
      ? `${Char1}_${AbbreviationSnakeCase<`${Char2}${Char3}${Rest}`>}`
      : `${Char1}${AbbreviationSnakeCase<`${Char2}${Char3}${Rest}`>}`
  : T;

export type LowerSnakeCase<T extends string> = Lowercase<AbbreviationSnakeCase<SnakeCase<T>>>;

export type LowerSnakeCaseObjectKey<T> = {
  [K in keyof T as LowerSnakeCase<string & K>]: T[K];
};
```

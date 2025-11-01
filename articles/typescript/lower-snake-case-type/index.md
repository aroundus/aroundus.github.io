---
category: typescript
index: 4
title: LowerSnakeCase Utility Type 만들기
description: camelCase 표기법을 lower_snake_case 표기법으로 변환하는 유틸리티 타입을 소개합니다. 축약어 대문자 조합인 isCTAButton 이름인 경우에도 is_cta_button 이름으로 변환할 수 있어야 합니다.
date: 2024-06-09
draft: true
---

# TL;DR

`camelCase` 타입을 정의하면 자동으로 `lower_snake_case` 타입까지 만들 수 있어요.

## Function

```typescript
/**
 * lower_snake_case 변환
 *
 * @description camelCase, PascalCase 표기법을 lower_snake_case 표기법으로 변환합니다. 축약어 대문자 조합인 경우도 포함합니다.
 * @example
 * convertToLowerSnakeCase('createdAt') // created_At
 * convertToLowerSnakeCase('created_At') // created_At (동일)
 * convertToLowerSnakeCase('imageURL') // image_url
 * convertToLowerSnakeCase('isCTAButton') // is_cta_button
 */
function convertToLowerSnakeCase(value: string) {
  return value
    .replace(/([a-z])([A-Z]+)/, '$1_$2')
    .replace(/([A-Z])([A-Z])([a-z]+)/, '$1_$2$3')
    .toLowerCase();
}
```

## Utility Type

```typescript
type Separator = ' ' | '-' | '_';

/**
 * camelCase -> snake_Case
 *
 * @description 소문자+대문자 조합에 대하여 snake_Case로 변환합니다.
 * @example
 * CamelCaseToSnakeCase<'createdAt'> // created_At
 * CamelCaseToSnakeCase<'created_at'> // created_at (동일)
 * CamelCaseToSnakeCase<'imageURL'> // image_URL
 * CamelCaseToSnakeCase<'isCTAButton'> // is_CTAButton
 */
// prettier-ignore
type CamelCaseToSnakeCase<T extends string> = T extends `${infer Char1}${infer Char2}${infer Rest}`
  ? `${Char1}${Char2}` extends `${Char1}${Separator}`
    ? `${Char1}${Char2}${CamelCaseToSnakeCase<Rest>}`
    : `${Char1}${Char2}` extends `${Lowercase<Char1>}${Uppercase<Char2>}`
      ? `${Char1}_${CamelCaseToSnakeCase<`${Char2}${Rest}`>}`
      : `${Char1}${CamelCaseToSnakeCase<`${Char2}${Rest}`>}`
  : T;

/**
 * camelUPPERCase -> snake_UPPER_Case
 *
 * @description 대문자+대문자+소문자 조합에 대하여 snake_UPPER_Case로 변환합니다.
 * @example
 * UpperCamelCaseToSnakeCase<'createdAt'> // createdAt (동일)
 * UpperCamelCaseToSnakeCase<'created_at'> // created_at (동일)
 * UpperCamelCaseToSnakeCase<'imageURL'> // imageURL (동일)
 * UpperCamelCaseToSnakeCase<'isCTAButton'> // isCTA_Button
 */
// prettier-ignore
type UpperCamelCaseToSnakeCase<T extends string> = T extends `${infer Char1}${infer Char2}${infer Char3}${infer Rest}`
  ? Char1 extends Separator
    ? `${Char1}${UpperCamelCaseToSnakeCase<`${Char2}${Char3}${Rest}`>}`
    : `${Char1}${Char2}${Char3}` extends `${Uppercase<Char1>}${Uppercase<Char2>}${Lowercase<Char3>}`
      ? `${Char1}_${UpperCamelCaseToSnakeCase<`${Char2}${Char3}${Rest}`>}`
      : `${Char1}${UpperCamelCaseToSnakeCase<`${Char2}${Char3}${Rest}`>}`
  : T;

/**
 * camelCase -> snake_case 변환
 *
 * @description
 * 1. 소문자+대문자 조합에 대하여 snake_Case로 변환합니다. (isCTAButton -> is_CTAButton)
 * 2. 대문자+대문자+소문자 조합에 대하여 snake_UPPER_Case로 변환합니다. (is_CTAButton -> is_CTA_Button)
 * 3. 전체 소문자로 변환합니다. (is_CTA_Button -> is_cta_button)
 *
 * @example
 * LowerSnakeCase<'createdAt'> // created_at
 * LowerSnakeCase<'created_at'> // created_at (동일)
 * LowerSnakeCase<'imageURL'> // image_url
 * LowerSnakeCase<'isCTAButton'> // is_cta_button
 */
export type LowerSnakeCase<T extends string> = Lowercase<UpperCamelCaseToSnakeCase<CamelCaseToSnakeCase<T>>>;

export type LowerSnakeCaseObjectKey<T> = {
  [K in keyof T as LowerSnakeCase<string & K>]: T[K];
};
```

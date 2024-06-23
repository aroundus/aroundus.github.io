---
category: typescript
index: 4
title: LowerSnakeCase Utility Type 만들기
description: camelCase 표기법을 lower_snake_case 표기법으로 변환하는 유틸리티 타입을 소개합니다. 근데 isCTAButton과 같은 연속적인 축약어 대문자도 is_cta_button으로 변환할 수 있어야 합니다.
date: 2024-06-09
---

# 시작하기

프로젝트는 camelCase 표기법을, 데이터베이스는 lower_snake_case 표기법을 사용하는 상황에서 프로젝트 `User` 타입을 데이터베이스 `user` 테이블에 매핑해야 합니다.

* **camelCase**

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  imageURL: string | null;
  isWadizUser: boolean;
  isDeleted: boolean;
  createdAt?: Date;
  updatedAt?: Date | null;
}
```

* **lower_snake_case**

```prisma
model user {
  id            String    @id @default(uuid())
  name          String
  email         String    @unique
  image_url     String?
  is_wadiz_user Boolean   @default(false)
  is_deleted    Boolean   @default(false)
  created_at    DateTime  @default(now())
  updated_at    DateTime?
}
```

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
 * camelCase -> snake_Case 변환
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

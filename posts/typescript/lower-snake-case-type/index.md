---
category: typescript
index: 4
title: LowerSnakeCase Utility Type 만들기
description: camelCase 표기법을 lower_snake_case 표기법으로 변환하는 유틸리티 타입을 소개합니다. 근데 isCTAButton과 같은 연속적인 축약어 대문자도 is_cta_button으로 변환할 수 있어야 합니다.
date: 2024-06-09
---

# 시작하기

프로젝트는 camelCase 표기법을, 데이터베이스는 lower_snake_case 표기법을 사용하고 있습니다. 프로젝트 `User` 타입을 데이터베이스 `user` 테이블에 매핑하기 위한 `LowerSnakeCase` 유틸리티 타입을 만들어 봅시다.

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

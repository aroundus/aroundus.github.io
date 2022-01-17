---
category: typescript
index: 1
title: CamelCase Type 만들기
description: UPPER_SNAKE_CASE, camelCase 방식으로 정의한 이름을 하나의 타입으로 정의해서 실전에 적용한 방법을 공유합니다.
date: 2022-01-06
---

# 🤦🏻‍♀️<br />TL;DR

`UPPER_SNAKE_CASE` 상수만 정의하면 자동으로 `camelCase` 타입까지 만들 수 있어요.

```typescript
type Separator = ' ' | '-' | '_';

type CamelCase<T extends string> = T extends `${infer Char1}${Separator}${infer Char2}${infer Char3}`
  ? `${Lowercase<Char1>}${Uppercase<Char2>}${CamelCase<Char3>}`
  : Lowercase<T>;
```

## Bad

```typescript
const DOCUMENT_TYPE = {
  MAIL_ORDER_BUSINESS_REPORT: '통신판매업 신고 서류',
  CERTIFICATE_OF_BUSINESS_REGISTRATION: '사업자 등록증',
  CORP_SEAL_CERTIFICATE: '법인 인감 증명서',
  COPY_OF_BANKBOOK: '통장 사본',
};

interface Params {
  document: {
    mailOrderBusinessReport?: File;
    certificateOfBusinessRegistration?: File;
    corpSealCertificate?: File;
    copyOfBankbook?: File;
  };
}
```

## Good

```typescript
const DOCUMENT_TYPE = {
  MAIL_ORDER_BUSINESS_REPORT: '통신판매업 신고 서류',
  CERTIFICATE_OF_BUSINESS_REGISTRATION: '사업자 등록증',
  CORP_SEAL_CERTIFICATE: '법인 인감 증명서',
  COPY_OF_BANKBOOK: '통장 사본',
};

type DocumentType = 'MAIL_ORDER_BUSINESS_REPORT' | 'CERTIFICATE_OF_BUSINESS_REGISTRATION' | 'CORP_SEAL_CERTIFICATE' | 'COPY_OF_BANKBOOK';

interface Params {
  document: {
    [K in CamelCase<DocumentType>]?: File;
  };
}
```

## Best 👍

```typescript
const DOCUMENT_TYPE = Object.freeze({
  MAIL_ORDER_BUSINESS_REPORT: '통신판매업 신고 서류',
  CERTIFICATE_OF_BUSINESS_REGISTRATION: '사업자 등록증',
  CORP_SEAL_CERTIFICATE: '법인 인감 증명서',
  COPY_OF_BANKBOOK: '통장 사본',
});

type DocumentType = keyof typeof DOCUMENT_TYPE;

interface Params {
  document: {
    [K in CamelCase<DocumentType>]?: File;
  };
}
```

---
category: typescript
index: 3
title: 객체 타입 키 이름에 접두사를 붙이는 Utility Type 만들기
date: 2023-10-10
---

다음과 같이 A 객체 타입 키 이름에 `$` 접두사를 붙인 새로운 B 객체 타입을 정의하려고 합니다.

```typescript
interface A {
  width: number;
  height: number;
}

interface B {
  $width: number;
  $height: number;
}
```

유틸리티 타입을 만들지 않고 다음과 같이 A 타입을 활용해서 정의하는 방법이 있습니다. 일일이 타입을 다시 정의하지 않고 기존 타입을 참조하기 때문에 실수를 방지할 수 있지만 여전히 수작업으로 정의해야 합니다.

```typescript
interface A {
  width: number;
  height: number;
}

interface B {
  $width: A['width'];
  $height: A['height'];
}
```

다음과 같이 접두사를 붙이는 유틸리티 타입을 사용하면 수작업 없이 간단하게 새로운 B 타입을 만들 수 있습니다.

```typescript
type PrefixObjectKey<T, P extends string> = {
  [K in keyof T as K extends string ? `${P}${K}` : never]: T[K]
}

interface A {
  width: number;
  height: number;
}

type B = PrefixObjectKey<A, '$'>
```

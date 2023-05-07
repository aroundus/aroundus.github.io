---
category: monologue
index: 2
title: 2022년 자기 성장 보고서
description: 2022년의 업무적 성과가 팀 목표에 어떻게 기여했는지 작성해 봤습니다. 1년이 지났지만 역시나 뒤로 갈수록 내용이 부실합니다.
image: self-growth-report
date: 2023-01-10
---

# 📈<br />자기 성장 보고서

## 성과

### 메이커 스튜디오 사용성 개선

제가 생각하는 메이커 스튜디오는 <mark>**와디즈에서 판을 펼칠 수 있는 놀이터**</mark>입니다. 아직까지는 메이커 스튜디오가 쉽고 필요한 서비스가 되기에 넘어야 할 장벽들이 많지만 <mark>**'더 많은 메이커 집단에게 쉽고 필요한 서비스가 된다.'**</mark> 목표 달성에 기여하며 한 단계씩 성장하고 있습니다.

#### 편집기 개선

메이커의 고질적인 진입 장벽 중 하나는 바로 스토리 작성 영역입니다. 지금까지 프로젝트 스토리에 여러 차례 스타일 개선 작업이 있었음에도 불구하고 외주 제작에 의존한 통 이미지 사용은 줄지 않았는데요, 메이커 스튜디오가 제공하는 편집기의 서식이 지극히 제한적이고 가독성이 낮다는 원천적인 문제를 해결해야 했습니다.

편집기 개선을 통해 메이커와 소통하는 유관 부서가 메이커에게 블로그형 스토리 작성을 독려하면서 메이커는 별도의 디자인 외주 비용을 지출하지 않고 편집기만으로 가독성 높은 스토리를 작성할 수 있게 되었습니다.

#### 리워드 옵션 개선

리워드는 옵션이 늘어나거나, 다소 복잡하게 설정하거나, 고도화할 경우 관리가 어려워지고 서포터의 결제 동선에도 영향을 미치게 됩니다. 또한 기존에는 리워드 옵션을 1 레벨만 설정할 수 있어 와디즈에서 프로젝트를 등록할 수 없는 메이커가 생기기도 했습니다.

2021년에 개발한 스토어 메이커 스튜디오 상품 옵션 콤비네이션 알고리즘을 활용하여 리워드 옵션을 최대 3 레벨로 늘리고 옵션 수정의 편의성을 높이기 위한 작업을 진행하였습니다. 리워드 옵션 개선을 통해 현재 프로젝트의 75%가 선택 옵션을 사용하고 있습니다.

#### 톤앤매너 개선

개발자의 역량을 요구하는 작업은 아니지만 평소에 친절하고 일관성 있는 문구 구성에 신경쓰고 있습니다. 메이커 스튜디오는 많은 팀들이 각각의 메뉴를 담당해 오면서 어떤 메뉴를 보느냐에 따라 톤앤매너가 달랐습니다.

와디즈의 목소리를 하나로 통일시키고 낯선 개념과 용어에 어려움을 느끼지 않도록 메이커 스튜디오의 톤앤매너를 정리하였습니다. 톤앤매너 개선으로 메이커 스튜디오에 대한 긍정적인 인식을 강화하고 프로젝트 작성의 허들을 낮추는 계기를 마련하였습니다.

#### 공지 관리

접근성이 낮은 와디즈 공지 사항으로는 정보 탐색이 어려워 바뀐 정책과 서비스를 인지하는 데 어려움이 있다는 VOC가 매주 10%씩 발생하였습니다.

메이커 스튜디오에 지속적으로 확인 가능한 공지 채널을 만들어 일시적인 이슈를 수동으로 안내하는 리소스를 절감하고 정책에 대한 이해도 인지 부족으로 발생하는 위험을 줄이는 데 기여하였습니다.

#### 대표 상품 설정

스토어의 경우 기존에는 등록된 상품 중 최저가 상품을 대표 상품으로 설정하고 있어 대표 상품과 가격 차이가 많이 날 경우 서포터가 이질감을 느껴 이탈하게 됩니다.

메이커가 원하는 대표 상품을 설정할 수 있도록 개선하는 작업을 통해 서포터에게 보다 정확한 정보를 제공하여 신뢰도를 높일 수 있었습니다.

#### 제주∙도서산간 배송비 관리

메이커 스튜디오에는 제주∙도서산간 배송비 설정 기능이 없어 제주∙도서산간 배송 건이 발생할 경우 메이커가 서포터에게 수동으로 연락해야 한다는 VOC가 지속적으로 발생하였습니다.

스토어 메이커 스튜디오에 제주∙도서산간 배송비 필드를 구성하여 메이커의 배송 안내 문구를 간소화하고 서포터와의 불필요한 소통을 줄여 배송비를 원활하게 관리할 수 있도록 하였습니다.

#### 도메인 분리

메이커 스튜디오 프로젝트는 펀딩, 투자, 메이커 페이지 도메인을 함께 사용하고 있어 공통 컴포넌트에 변경 사항이 발생할 경우 다른 도메인까지 고려해야 하는 단점이 있었습니다. 도메인을 별도의 환경으로 구성하는 작업을 통해 의존성을 분리하였습니다.

### 클라우드 전환

AWS 쿠버네티스 인프라 경험이 있어 프론트엔드 대표로 클라우드 TF에 참여하여 <mark>**'클라우드 전환을 통해 개발 생산성을 높이고 고도화된 기술로 와디즈 서비스를 개선한다.'**</mark> 목표 달성에 기여하였습니다.

#### GitHub 마이그레이션

온프레미스 BitBuckit 서비스에서 무분별하게 생성한 저장소들을 GitHub 마이그레이션 과정에서 정리하고 젠킨스 배포 환경을 구성하였습니다.

#### 쿠버네티스

쿠버네티스로 앱을 배포하고 관리해 보면서 지금 당장은 아니지만 앞으로 프론트엔드 프로젝트를 SSR로 구성하고 클라우드로 운영할 경우에 대한 시나리오를 살펴볼 수 있었습니다.

## 역량

### 개발 능력

프론트엔드 개발자는 좋은 사용자 경험을 제공하기 위해 최신 기술을 채택하고 지속적인 영향력을 미칠 수 있도록 끊임없이 진화해야 한다는 압박감을 가지고 있습니다. 팀 동료들이 추천하는 기술을 서비스에 적용해 보면서 프론트엔드 트렌드에 맞춰 서비스 개선을 위해 수용할 만한 기술이 있는지 검증하는 능력을 길렀습니다.

#### MSW

리워드 옵션 개선 작업 당시 백엔드가 아직 작업 완료 전이라 개발을 위한 모의 데이터가 필요했는데 팀 동료가 MSW를 제안해 주셔서 메이커 스튜디오에 MSW를 적용하고 더욱 생산적인 프론트엔드 개발을 진행한 적이 있습니다.

#### Styled Component

굿 웨이브 TF 2기 프로젝트에서 스타일 정의를 CSS 파일이 아닌 JavaScript 컴포넌트에 바로 삽입하는 방식으로 작업하고 있습니다. 유행은 항상 돌고 돌아서 어떤 방법이 더 좋다고 확신할 수는 없지만 특성을 고려하여 기회가 된다면 팀 프로젝트에도 적용해 보려고 합니다.

#### TypeScript

JavaScript 기반인 메이커 스튜디오 프로젝트도 이제 TypeScript로 작성하기 시작하면서 코드의 가독성을 높이고 트랜스파일링 단계에서 오류를 발견할 수 있게 되었습니다.

### 분석 능력

개발자는 늘 라이브러리를 사용합니다. 시간이 지날수록 발전하는 라이브러리 덕분에 우리는 비즈니스 로직에만 집중할 수 있게 됐습니다. 하지만 어쩌다가 라이브러리에 문제가 발생하면 어쩔 수 없이 안을 들여다봐야 합니다. 라이브러리 코드는 내가 아는 일반적인 코드일 수도, 내가 모르는 신세계일 수도 있습니다.

#### Froala Editor

우리가 사용하는 편집기 라이브러리인 Froala Editor는 4 버전은 TypeScript를 지원하지 않아 모듈 정의 파일이 없어서 우리가 사용하려면 실제로 그 함수가 정의한 대로 동작하는지 검증하는 작업을 필요로 했습니다. 더군다나 Froala Editor는 오픈 소스가 아니어서 경량화된 파일만 제공했기 때문에 코드 분석에 어려움이 따르기도 했습니다. 라이브러리 코드 분석을 조금씩 시도해 보면서 부족하긴 하지만 예전보다 분석 능력이 향상됨을 느꼈습니다. 라이브러리 코드에서 사용한 기술 중 좋은 기술이 있다면 참고해서 팀 프로젝트에 기여해 보려고 합니다.

## 핵심 가치

### 우선순위를 가지고 일하고, 맡은 일은 완결성 있게 끝낸다.

편집기 개선 당시 콘텐츠팀의 요청 사항을 짧은 시간 안에 모두 개발할 수 없었습니다. 우리는 기능에 따라 우선순위를 나누고 개발에 착수하여 1차 완성하는 데 성공하였습니다.

### 다른 사람이 시키지 않은 숙제를 많이 만든다.

<mark>**굿 웨이브 TF**</mark>는 '우리가 하는 일'에 대한 애정 어린 고민들을 공유하고 와디즈를 더 #better한 곳으로 만들기 위한 진국이들의 공간입니다. 1기를 마치고 2기를 진행하면서 Next.js, Styled Component, React Spring 등의 새로운 기술을 사용하고 프론트엔드 분야에 어떻게 하면 잘 응용할 수 있을지 고민하고 있습니다.
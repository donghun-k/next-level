# NEXT LEVEL
![logo](https://github.com/donghun-k/next-level/assets/60064471/77e4f6a1-e2ed-4498-98c6-ce2c985b0f1b)

<h3 align="center">📝 Next.js + Sanity 개인 블로그 📝</h3>
<h5 align="center">배포 링크: <a href="https://next-level-kdh.vercel.app/">NEXT LEVEL</a></h5>
<br/>

## ⚒️ Tech stack
|Language|Framework|Styling|State Management|Headless CMS|
|:---:|:---:|:---:|:---:|:---:|
|![image](https://github.com/donghun-k/fall-in-love-with-movie/assets/60064471/3ca9aaba-151d-4958-8a44-a83a5b71a1fc)|![nextjs](https://github.com/donghun-k/next-level/assets/60064471/fdc167ab-82b2-49a9-8028-358afe628d7e)|![tailwind-css](https://github.com/donghun-k/next-level/assets/60064471/dae4a647-84f4-4525-88d5-36fb3638f841)|![swr](https://github.com/donghun-k/next-level/assets/60064471/7912c7fd-80c0-4073-8c06-2a315dad8a7a)|![sanity](https://github.com/donghun-k/next-level/assets/60064471/38e6741a-e849-4a4c-9ee8-a28e5bb96da0)|
|TypeScript|Next.js v14|Tailwind CSS|SWR|Sanity|
<br/>

## 🏛️ Architecture
![Architecture](https://github.com/donghun-k/next-level/assets/60064471/61cb57f9-8d31-4b35-99a9-54fe30569edd)

<br/>

## ✨ Features
### 📋 인기 포스트 및 최근 포스트 목록
|인기 포스트 목록|최근 포스트 목록|
|:---:|:---:|
|![인기 포스트](https://github.com/donghun-k/next-level/assets/60064471/4d527be5-d263-4e36-ad0f-490a5e8e9b1d)|![최근 포스트](https://github.com/donghun-k/next-level/assets/60064471/e6100215-11f5-426d-bb5c-75f787beb22e)|

**『메인 페이지』** 에서 보여주는 **『인기 포스트 목록』** 과 **『최근 포스트 목록』** 은

동적인 데이터에 의존하지만, 이는 자주 업데이트 되는 데이터는 아닙니다.

따라서 서버의 부담을 줄이기 위해 빌드 시에 **Static Rendering** 되도록 하되,

데이터를 조회하는 `fetch` 함수에 `next.revalidate` 옵션을 설정해

**『인기 포스트 목록』** 은 4시간마다, **『최근 포스트 목록』** 은 1시간마다 업데이트되도록 하였습니다. 

<br/>

### 📧 『컨택 페이지』에서 메일 전송 및 『포스트 페이지』에서 코멘트 등록 시 알림 메일
|메일 전송|코멘트 등록|
|:---:|:---:|
|![메일](https://github.com/donghun-k/next-level/assets/60064471/c58c0741-baa3-4e33-b7a6-82fd85b93553)|![코멘트](https://github.com/donghun-k/next-level/assets/60064471/c580f197-9485-4c90-93ae-ea2ddec0f68b)|

**Next.js v14**의 **Server Actions**를 활용하여 메일 전송 및 코멘트 등록 기능을 구현했습니다.

`useFormStatus` 훅을 사용해 Form Submission의 상태를 확인하고 **Progress UI**를 표시했습니다.

|컨택 페이지에서 발신된 메일|코멘트 등록 알림 메일|
|:---:|:---:|
|![메일 수신](https://github.com/donghun-k/next-level/assets/60064471/823091ed-d4d9-43ff-b531-c57bdb2f6527)|![알림 수신](https://github.com/donghun-k/next-level/assets/60064471/0c940223-902c-419f-9058-99a772a5160e)|

**Server Actions** 함수 내에서 **Nodemailer** 라이브러리를 이용해 실제 메일을 발송합니다.

<br />

### 🔎 『포스트 목록 페이지』의 자동 검색 기능
|자동 검색|
|:---:|
|![검색](https://github.com/donghun-k/next-level/assets/60064471/eeb8d87b-5b02-43f3-8784-17e89aa08dbf)|

사용자가 텍스트를 입력하면 검색 버튼을 누르지 않아도 자동으로 포스트를 검색합니다.

입력 시 마다 검색 요청을 보내는 것은 비효율적이므로,

**Debouncing** 기법을 적용하여 사용자의 텍스트 입력이 끝난 후에만 검색 요청을 보냅니다.


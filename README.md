# 세탁특공대 과제

## 기술스택
`JavaScript`, `TypeScript`, `NestJS`, `TypeORM`, `REST-API`, `MySQL`, `Docker`, `Git`, `GitHub`

<br/>

## ERD
[![세탁특공대_과제](https://user-images.githubusercontent.com/91056667/168954713-2344fe6a-03ef-49ca-b327-299cc12566be.png)](https://www.erdcloud.com/d/2CNTf97LveZ9eFaw)

<br/>

## API
>***[http://localhost:3000/api-docs](http://localhost:3000/api-docs)***

<br/>

## 프로젝트 설치 방법 & 실행 방법
``` bash
git clone https://github.com/jiwon8518/laundry.git

yarn install
```
## 도커 빌드 & 실행
```
docker compose build

docker compose up
```
<br/>


## 폴더 구조
```
laundry
├─ .dockerignore
├─ .eslintrc.js
├─ .gitignore
├─ .prettierrc
├─ docker-compose.yaml
├─ Dockerfile
├─ nest-cli.json
├─ package.json
├─ src
│  ├─ apis
│  │  ├─ category
│  │  │  ├─ category.controller.ts
│  │  │  ├─ category.module.ts
│  │  │  ├─ category.service.ts
│  │  │  ├─ dto
│  │  │  │  └─ createCategory.input.ts
│  │  │  └─ entities
│  │  │     └─ category.entity.ts
│  │  ├─ item
│  │  │  ├─ dto
│  │  │  │  ├─ createItem.input.ts
│  │  │  │  └─ updateItem.input.ts
│  │  │  ├─ entities
│  │  │  │  └─ item.entity.ts
│  │  │  ├─ item.controller.ts
│  │  │  ├─ item.module.ts
│  │  │  └─ item.service.ts
│  │  └─ order
│  │     ├─ dto
│  │     │  ├─ createOrder.input.ts
│  │     │  └─ updateOrder.input.ts
│  │     ├─ entities
│  │     │  └─ order.entity.ts
│  │     ├─ order.controller.ts
│  │     ├─ order.module.ts
│  │     └─ order.service.ts
│  ├─ app.module.ts
│  └─ main.ts
├─ test
│  ├─ app.e2e-spec.ts
│  └─ jest-e2e.json
├─ tsconfig.build.json
├─ tsconfig.json
└─ yarn.lock

```

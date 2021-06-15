# Prisma

- orm = sql코드를 쓸 필요없이 자바스크립트를 사용하면 데이터베이스에 대신 입력해줌
- 자바스크립트와 타입스크립트를 사용한다. go는 개발중
- 주로 타입스크립트를 사용하는 편이 좋다.
- prisma가 migration을 적용하고, 데이터베이스를 동기화해준다.
- 클라이언트를 생성하는데 그것이 데이터베이스에 적용된다.
- npm install prisma -D
- npx prisma init
- rust로 만들어져서 빠르단다.
- datasource : 데이터베이스 주소(url)와 종류(provider)를 알려준다.
- .env에 포함되는 데이터베이스 경로
  - DATABASE_URL="[사용자 이름]://young:randompassword@localhost:5432/[데이터베이스명]?schema=public"
- client : 어떤 방식으로 데이터베이스와 상호작용하는가
- model : 모델
  - @id : id
  - @default : 기본값
  - autoincreament() : 숫자 1씩 자동 증가 
  - @default(now()) : 모델 생성시 현재 시간 추가 
  - @updatedAt : 업데이트 시점에 현재 시간 추가
  
<br />

- 마이그레이트 : npx prisma migrate dev init 

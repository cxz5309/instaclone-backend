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
  - DATABASE_URL="[사용자 이름]://young:[비밀번호]@localhost:5432/[데이터베이스명]?schema=public"
- client : 어떤 방식으로 데이터베이스와 상호작용하는가
- model : 모델
  - @id : id
  - @default : 기본값
  - autoincreament() : 숫자 1씩 자동 증가 
  - @default(now()) : 모델 생성시 현재 시간 추가 
  - @updatedAt : 업데이트 시점에 현재 시간 추가
  - @unique : 동일한 이름이 하나만 존재, 더넣으면 거절됨
  - @relation("FollowRelation", references: [id])
    - self-relationship이란 :
    - A.followers[B]를 하게 되면 B.followers[A]가 자동적으로 되는 관계 
    - followers를 reference할 때 id를 통해 참고한다는 관계 FollowRelation를 생성하였다
    - 같은 관계를 가진 값이 2개 이상이 아니면 오류가 났다.
    - 이 관계를 가진 것을 눌러주는 코드는 data:{
                    following:{
                        connect:{
                            username: toFollow,
                        }
                    }
                } 로 쓰인다.
    - 반대는 disconnect
    - 그러나 사용자들간의 관계는 매우 값비싸다
    - 팔로워가 1억명이면 1억의 로딩이 필요하다
    - 따라서 pagination작업을 해주어야 하는데 
      - offset pagination 방식
      - .findUnique({where:{username}})
              .followers({
                  take:5,
                  skip:(page-1) * 5,
              });
      - take로 사용하는 item수를 제한하고 skip으로 이전 item을 제외한다
      - 장점 : page의 어느 곳이든 갈 수 있다, 단점 : skip된 item의 개수만큼 데이터를 가져와야 한다(사실상 스킵이 아닌듯)
      - cursor pagination 방식
      - 이전에 가져온 item을 cursor로 두고 그것부터 다음 아이템을 찾는 방식
      - -> '그것부터' 이기 때문에 그 다음부터로 하려면 ~~skip을 항상 1로 두면 된다.~~(아님)
      - 첫번째 커서는 없기 때문에 typeDefs에서 lastId는 !를 붙이지 않으며
      - cursor: 에도 커서가 있는지 없는지를 확인하는 작업 ...(lastId && {cursor:{id:lastId}} 를 해줘야 하고, 
      - skip: lastId? 1 : 0, 도 해야한다.
      - 장점 : 규모가 아주 커도 상관없다, 단점 : 특정 페이지로 바로 이동 불가
      - 가장 좋은 경우는 무제한 스크롤 페이지가 필요한 경우이다.



<br />

- 코드에서 사용되는 기능
- select: {id: true} -> 찾은 데이터의 모든 필드를 가져올 필요가 없기 때문에 에러 확인 절차가 필요한 경우 select로 id만 찾아서 가져온다.
- 코드 include:{following:true, followers:true}는 내가 원하는 사용자 관계를 가져올 수 있다.
- .followers({
                take:5,
                skip:(page-1) * 5,
            });
- take로 사용하는 item수를 제한하고 skip으로 이전 item을 제외한다



<br />

- 마이그레이트 : npx prisma migrate dev init 

<br />

- @prisma/client
  - 클라이언트에서 db를 이용하게 해준다
  - findFirst : 첫번째값 리턴
  - findUnique : prisma/client에서 findFirst와 findUnique의 가장 큰 차이점은 findUnique는 속성이 unique인 필드만 찾는다는 것이다. 따라서 findUnique가 기본적으로 빠르다


<br />

- 만약 prisma에 undefined를 보낼 경우 데이터베이스에는 그 값들을 보내지 않는다.
- 어떤 이유든간에 prisma단에까지 오류를 보내는 것은 지양해야 한다.
- 주로 Query, Mutation, Subscription 을 만들고 resolver를 만들지만 직접 만든 타입에도 resolver를 붙이는게 가능하다 예를 들어 User:{totalFollowing: ()=>{}}도 가능하다.
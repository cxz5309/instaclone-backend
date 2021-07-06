# Apollo Server

- Apollo에서 제공하는 매우 쉬운 서버 시작

- apollo server는 context 파트가 있는데 이것이 모든 context에 접속할 수 있게 한다.
- context는 함수가 될 수도 있고, request와 response를 가질 수도 있다.
- context는 그 안에 있는 것들을 모든 resolver에 전해준다.
- resolver에는 함수를 만들고는 있지만 실행시키지는 않는다. 함수를 정의만 한다.
- 실행시키는 것은 브라우저이다.
- request가 들어올 때 함수가 실행되고 grqphql 서버가 root, args, context, info를 넣고 실행시킨다.  
- root는 현재 사용되는 필드의 부모를 가져온다

- upload기능 지원은 apollo server를 이용해 schema를 만들어야 자동으로 생성된다.
- 현재 graphql-tools를 이용하여 makeExecutableSchema로써 스키마를 만들었으나 apollo server를 이용한 upload 스칼라를 사용하고 싶다면 apollo server가 스키마를 만들 수 있도록 해야 한다.
- 스키마를 만든 후 가져오는 대신에 typeDefs와 resolvers를 가져오기만 하면 된다.

# Apollo Server Express

- 4.18 Ejecting from Apollo Server
- Apollo 서버는 사실 이미 만들어져 있는 서버이므로 제공되는 것 밖에 할 수 없다.
- apollo 서버는 url을 변경하는것이 불가능하여 파일 업로드 폴더인 uploads 폴더 url을 읽어올 수가 없다.
- 그 이유로 다른 rest 서버와 달리 apollo 서버는 graphql 서버이기 때문이다.
- 따라서 강의에서는 우리가 모든것을 만들고 apollo server를 얹는 방법을 채택하였는데 그 방법으로 사용되는 패키지이다.
- 이 패키지를 사용하면 express 서버로 /graphql 에다만 apollo 서버를 붙일 수 있다.
- 이 방법으로 우리가 서버를 만들고 rest api를 사용하거나 middleware를 추가하거나 등의 서버 사용이 가능해진다
- 대부분의 회사에서 graphql api를 쓰겠지만 다음으로 rest api를 쓸 수도 있고 socket io를 실시간으로 실행하게 될 수도 있는데 그럴 때 express server를 사용할 수 있게 한다.
- server.applyMiddleware({app}); 로 express 서버를 apollo 서버의 미들웨어로 사용했다.

- 이 이해를 위해 매우 도움이 된 사이트
> - GraphQL과 REST의 차이점
> https://hwasurr.io/api/rest-graphql-differences/
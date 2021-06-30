# Apollo Server

- Apollo에서 제공하는 매우 쉬운 서버 시작

- apollo server는 context 파트가 있는데 이것이 모든 context에 접속할 수 있게 한다.
- context는 함수가 될 수도 있고, request와 response를 가질 수도 있다.
- context는 그 안에 있는 것들을 모든 resolver에 전해준다.
- resolver에는 함수를 만들고는 있지만 실행시키지는 않는다. 함수를 정의만 한다.
- 실행시키는 것은 브라우저이다.
- request가 들어올 때 함수가 실행되고 grqphql 서버가 root, args, context, info를 넣고 실행시킨다.  

- upload기능 지원은 apollo server를 이용해 schema를 만들어야 자동으로 생성된다.
- 현재 graphql-tools를 이용하여 makeExecutableSchema로써 스키마를 만들었으나 apollo server를 이용한 upload 스칼라를 사용하고 싶다면 apollo server가 스키마를 만들 수 있도록 해야 한다.
- 스키마를 만든 후 가져오는 대신에 typeDefs와 resolvers를 가져오기만 하면 된다.
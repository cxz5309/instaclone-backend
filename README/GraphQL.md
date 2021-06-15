# GraphQL

- graphql-yoga 에서도 서버를 제공해준다
  - graphql-yoga의 장점은 코드를 별로 쓰지 않아도 된다.
  - graphql-yoga가 세팅을 모두 알아서 해주기 때문에
  - 그러나 Apollo에서 서버세팅이 제공되어 이 프로젝트에서는 Apollo Server를 사용한다.
  - graphql-yoga는 또한 Apollo서버 위에서 동작하므로 더욱 의미가 없다.
- resolvers에 Query(or Mutation)가 존재하면 schema에도 있어야 한다.
- 모든 resolvers는 root, args, contex, info를 지니고 있다
- graphql-tool : merge, load 등
  - loadFileSync(`${__dirname}/schema/**/*.graphql
  - loadFileSync는 파일의 default export를 가져온다 = export default로 내보내야한다
# Morgan

- 서버 실행시 서버에 들어오는 모든 요청을 log로 볼 수 있다.
- app.use(logger('tiny')); 로 미들웨어로 사용했다.
- server에 매 초마다 요청이 들어오는 이유는 graphql playground가 정기적으로 (polling : 백엔드로 request를 보내 업데이트를 체크) 하기 때문이다.
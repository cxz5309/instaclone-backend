# Babel

- 자바스크립트 컴파일러
- 자바스크립트의 최신 문법을 가진 코드를 node.js 버전, 브라우저가 이해할 수 있는 환경에 맞춰주는 패키지  
- 환경에 따라 어떤 사람들은 버전 업그레이드가 불가능할 수 있기 때문
-  현재 node.js 버전에서 지원해주는지 확인할 필요 없음
-  nodejs 14버전에서는 import문법을 지원해주지만 package.json에 "type": "module"추가시 동작 가능

- babel/node   
  + console에서 js파일을 실행 가능하다  
<br />

- babel/preset-env   
  + 지속적인 업데이트  
  + 어떤것을 컴파일할지, 어떤것을 놔둘지 알아서 판단해줌
<br />
   
- 이 프로젝트에서는 babel - Language APIs : Node 사용
```
https://babeljs.io/setup#installation
``` 
```
node server.js
-> babel-node server
```
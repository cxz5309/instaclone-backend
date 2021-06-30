# Maximum call stack size exceeded 버그 해결법

- package.json 에 아래를 복사한다.
```
"resolutions": {
"fs-capacitor": "^6.2.0",
"graphql-upload": "^11.0.0"
}
```
- node_modules 삭제
- npx npm-force-resolutions 을 "scripts"에 "preinstall"에 넣고 재인스톨
# Dotenv

- .env파일 읽기
- dotenv를 app의 모든것의 맨 위에서 즉시 실행시키기
- const PORT = process.env.PORT;
```
import dotenv;
dotenv.config();
  === require('dotenv').config();
```
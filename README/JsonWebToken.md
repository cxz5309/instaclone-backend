# JsonWebToken

- 토큰의 한 종류
- [in login]
- 우리 서버의 특징있는 사인을 하고 user에게 보낸 후 user는 저장한다
- 유저는 토큰을 저장해놓고 원할때마다 우리에게 토큰을 보내면
- 우리는 id를 확인하고 사인을 확인하면 된다.
- 사인에는 2가지가 필요한데
- payload, secretOrPrivateKey이다
- payload는 우리가 토큰에 넣게 되는 것이고
- secretOrPrivateKey는 서버가 서명한다
- 여기서는 payload에 user id를 넣었다

- 토큰은 누구나 볼 수 있기 때문에 비밀정보를 보관하지 않는다.
- 목적은 정보를 넣는것이고 우리가 그것을 확인하는 것
- iat : 토큰이 이슈된 시간
- expires도 제공한다. 2, 7, 60일 등 만료시간이 생긴다.

- 현실적으로 모든 mutation에 토큰을 제공하는 것은 비효율적이므로 추상화과정이 필요하다.
- 
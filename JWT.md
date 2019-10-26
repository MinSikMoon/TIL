# JWT
> JSON Web Token

### 장점
- URL-safe
- Web browser-compatible especially for single sign-on context

### 작동방식
- authenticating 할때, 서버가 준 JWT를 클라이언트가 가지고 있어야 한다.
- 세션과는 다르게, 클라이언트가 쿠키 가지고 있을 필요가 없다.
- stateless : 클라이언트의 상태가 서버에 저장되어 있을 필요가 없다.

### 구성
1. **Header** :  토큰을 만드는 데 사용할 알고리즘을 정한다.
2. **Payload** 
3. **Signature**

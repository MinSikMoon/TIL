# namespace

- 컨테이너 : 변수 & 함수를 위한
- 같은 이름의 변수 또는 함수를 구분시켜준다.

```javascript
var greet = "hello";
var greet = "hola";

console.log(greet);
```

이러면 hola가 나오겠지.

#### javascript는 namespace가 없다.

#### 그럼 어떻게 이걸 구현할까?

> object를 만들어서 해결한다.

#### faking namespace!

```javascript
var english = {};
var spanish = {};

english.greet = "hello";
spanish.greet = "hola";

console.log(english); //hello
```

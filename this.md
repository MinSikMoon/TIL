### this

#### function이 뭘까?

- function이 invoked 되면 new execution context가 생긴다.
- function object는 property를 2개 가지는데, NAME, CODE다.
- 현재 행해지고 있는 execution environment에서 변수를 못찾는다면 찾을 때가지 다른 execution environment를 찾아나간다.

#### method가 뭘까?

- object에서 value가 primitive type이면 property라 부른다.
- value가 function이면 method라 부른다.

#### this

- this는 상황에 따라 다른 object를 가리킨다.
- 어떻게 function이 invoked 되느냐에 따라 갈린다.

```javascript
function a() {
  console.log(this);
  this.newVariable = "hello"; //. operator로 인해 global 객체에 newVariable이라는 property가 추가된다.
}

var b = function() {
  console.log(this);
};

a();
b(); //a,b 둘다 ()를 쓰는 순간 해당 function이 invoked //되면서 각자의 execution 환경이 생긴다.
// 둘다 this는 브라우저의 global객체인 window를 가리킨다.
console.log(newVariable); //글로벌 object property는 그냥 이렇게 쓸 수 있다. hello찍힘

var c = {
  name: "The c object",
  log: function() {
    var self = this; //이제 this대신 self쓰면 실수 없다.
    //self는 항상 c를 가리킨다.
    this.name = "updated c object"; //c의 name이 변한다.
    console.log(this); //this는 무엇을 가리킬까?

    //그런데 method속에 또 function을 만들면 this는 어딜 가리킬까?
    var setName - function(newName){
        this.name = newName;
    }
    setName('Updated again in method');
    console.log(this); //c의 name이 변하길 바라겠지만, global에 name이 생겨버리고 그 이름이 우리가 넣은 변수로 바뀐다. 왜 global을 가리키는가
    //그래서 self라는 변수를 만들어 this를 만드는 디자인 패턴을 쓴다. this가 혼란스럽기에
    // 그래서 이제는 var 대신 이 문제를 해결한 let을 쓴다.
  }
};

c.log(); // this가 c object를 가리킨다.
//function이 method라면, 즉 function이 object에 붙어있다면 this는 자기가 들어있는 object를 가리킨다.
```

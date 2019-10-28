### statement vs expression
#### 가장 큰 차이?
> #### value를 return 하느냐 안하느냐 차이

````javascript
greet(); //실행된다. function임을 보고 메모리에 넣어둔다.

function greet() {     // 아무일도 일어나지 않는다.
  console.log('hi');
}

greetVar(); // undefined라고 실행안됨, var은 undefined가 배정되니까.

var greetVar = function(){   //anonymous object가 생성되고 return 된다.
  console.log('hi'); 
}
````

### statement vs expression
#### 가장 큰 차이?
> #### value를 return 하느냐 안하느냐 차이

````javascript
function greet() {     // 아무일도 일어나지 않는다.
  console.log('hi');
}

var greetVar = function(){   //anonymous object가 생성되고 return 된다.
  console.log('hi'); 
}
````

var animals=[
  {name:'cat', footNumber:4},
  {name:'chicken', footNumber:2},
  {name:'dog', footNumber:4}
];

for(var i=0;i<animals.length;i++){
  console.log(animals[i].name+':'+animals[i].footNumber+'\n');
}

//for...of
for(var animal of animals){
  console.log(animal.name,animal.footNumber);
}

// for...in
var myDog={
  name:'4 chan',
  age: 5,
  weight: 10
};
for(var key in myDog){
  console.log(key,myDog[key]);
}

//array method

animals.pop();
//pop: trả về phần tử mới bị đẩy ra

animals.push( {name: 'duck',footNumber:2});
//push: trả về length của mảng

animals.shift();
//trả về phần tử lấy ra ở đầu mảng

animals.unshift({name:'duck',footNumber:2});
//trả về độ dài của mảng

//splicing --INSERT or REMOVE item
animals.splice(1,0,{name:'duck', footNumber:2});


//concat -- MERGE
var bigAnimal=[
  {name: 'elephant',footNumber:4}
];
var tinyAnimal=[
  {name:'virus',footNumber:undefined}
];
animals =animals.concat([{name:'mouse',footNumber:4},{name:'buffalo', footNumber:4}]);
animals=animals.concat(bigAnimal,tinyAnimal);


//slice: cut array -> create new array
animals=animals.slice(0,1);
animals=animals.slice(1);

for (let key of animals){
  console.log(key.name,key.footNumber);
}

// toString
const plants=['mango','orange','lemon','watermelon','strawberry'];
let strPlants=plants.toString();
console.log(strPlants);

var a=[1,2,5];
var b=[8,9,10];
a.concat(b);
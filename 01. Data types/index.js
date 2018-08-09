 /*
Data types:
Primitive types:
  -Number
  -String
  -Boolean
Speacial types:
  -undefined
  -null
Reference types:
  -Array
  -Object
 */

//Number
var a=-10;
var b=0.2;

// //String
var str1="Hi ndc07";
var str2='ndc07';
var str3='I\'m ndc07'
console.log(str3);

// // Boolean
var isDraw=true;
console.log(isDraw);

// // undefined
var n;
console.log(n);
//null
x=null;
console.log(x);

// Object

Syntax
var obj={
  key:value
};

var myDog={
  name:'4 chan',
  weight: 60,
  isFemale: true
};
var myBestFriend={
  name:'Thinh',
  Age: 20,
  gender: 'male'
};
var e={};
console.log(myDog.name);
console.log(myBestFriend);
console.log(myDog['name']);

//Array
var arr=[1,2,'ndc07',null];
console.log(arr);

var dog1={
  type:'Husky'
};
var dog2={
  type:'Corgi'
};
var arrDogs=[dog1,dog2];
console.log(arrDogs);
console.log(arrDogs[0]);
console.log(arrDogs[1]['type']);
var contacts=[
  {name: 'Thinh', phone:'01644545'},
  {name: 'Long', phone:'13131212'}
];

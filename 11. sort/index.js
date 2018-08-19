//Sort an array
//syntax: array.sort(function(a,b){});
//                    ^ sort function
/*
if sort function
  return a value <0
    a will come before b
  return a value >0
    a will come after b
  return 0
    q and b will stay unchanged
*/

const numbers=[1,9,5,6,4,8,4,2,3,5,1];
numbers.sort(function(a,b){
  return b-a;
});
console.log(numbers);

const employees=[
  {name:'Dang', age:21},
  {name:'Cuong',age:20},
  {name:'Quang',age:25}
];
employees.sort((a,b)=>a.age-b.age);
console.log(employees);
console.log('========================================');
//1. Define an array of product(name, price, stock)
//2. Sort by price from more expensive to less expensive
//3. Sort by int stock value from more expensive to less expensive
const products=[
  { name:'Laptop', price:500, stock: 5},
  { name:'Smartphone', price:200,stock: 15},
  { name:'TV', price: 1000, stock: 12}
];
let descendingPrice=products.sort((a,b)=>b.price-a.price);
console.log(descendingPrice);
let descendingStockValue=products.sort((a,b)=>b.price*b.stock-a.price*a.stock);
console.log(descendingStockValue);

console.log('========================================');

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];
let descItems=items.sort((a,b)=>{
  var nameA=a.name.toUpperCase();
  var nameB=b.name.toUpperCase();
  return nameA<nameB;
});
console.log(descItems);
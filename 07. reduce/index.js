const numbers=[1,2,5,6,9,4,1];

numbers.reduce((a,b)=>{
  console.log(a,b);
  return a+b;
});

numbers.reduce((a,b)=>{
  console.log(a,b);
  return a+b;
},0);

numbers.reduce((a,b)=>a+b);

const orders=[
  { name:'A', quantity: 2, unitPrice: 500},
  { name:'B', quantity: 1, unitPrice: 1000},
  { name:'C', quantity: 3, unitPrice: 200}
];


orders.reduce((totalPrice, order)=>{
  return totalPrice + order.quantity * order.unitPrice;
},0);

///////////////////////////////////////////////////////////////

const items=['Tom', 'Bill', 'Kim'];
//1.Use reduce to make this result
//'<Tom><Bill><Kim>'
//2.Use map & join

//1.
items.reduce((strItems,item)=>{
  return strItems+= '<'+item+'>';
},'');
//2.
let arrItems= items.map(item=>{
  return '<'+item+'>';
});
let strItems= arrItems.join('');
console.log(strItems);
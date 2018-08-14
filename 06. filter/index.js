const numbers = [ 1, 2, 3 , 4];

let evenNumbers = numbers.filter(function(item){
  return item%2 === 0;
});

const students = [
  { name:'Ngan', sex:'male'},
  { name:'Cuong', sex:'male'},
  { name:'Khanh', sex:'female'},
  { name:'Thu', sex:'female'}
];

let maleStudents= students.filter(function(item){
  return item.sex==='male';
});

console.log(maleStudents);
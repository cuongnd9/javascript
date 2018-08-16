// cho một biến dữ liệu như sau : 
const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
];
// Mỗi object tượng trưng cho 1 con thú nuôi, có 2 kiểu là chó và mèo (dog và cat)
// Viết các hàm thực hiện các công việc sau : 
// 1) Lấy ra tất cả các tên của chó

let nameOfDogs=data.filter(item=>item.type==='dog').map(item=>item.name);
console.log(nameOfDogs);

// 2) Đếm số lượng mèo có trong dữ liệu 

data.reduce((totalOfCats, animal)=>{
  if(animal.type==='cat')
    totalOfCats++;
   return totalOfCats; 
},0);

// 3) Tính tổng số tuổi chó của tất cả các con chó (bằng tuổi trong dữ liệu nhân với 7)

data.reduce((ageOfDogs,animal)=>{
  if(animal.type==='dog')
    ageOfDogs+= animal.age * 7;
  return ageOfDogs;  
},0);

// 4) Tìm pet theo tên, trả về -1 nếu ko tìm thấy, trả về 1 object nếu chỉ có 1 đối tượng match, trả về 1 mảng nếu có 2 đối tượng match trở lên

function findPet(petName){
  let math=[];
  data.filter(item=>{
    if(item.name===petName)
      math.push(item);
  });
  switch(math.length){
    case 0: return -1;
    default: return math;
  }
};
findPet('Red');
//Chỉ sử dụng các hàm map, filter và reduce, dùng tối đa 2 hàm :D 

//array.find
// Hàm find sẽ trả về giá trị của phần tử đầu tiên trong mảng thỏa mãn được điều kiện kiểm tra( được truyền vào như một hàm!).
const numbers= [ 1, 2 ,3, 4, 5, 6];
// let number=numbers.find(function(item){
//   return item%3===0;
// });
let number=numbers.find(item=>{
  return item%2===0;
});
number;

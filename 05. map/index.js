const numbers=[1,2,3,4];

let squaredNumbers=numbers.map(function(item){
  return Math.pow(item,2);
});

let squareRootNumbers=numbers.map(function(item){
  return Math.sqrt(item);
});

const rectangles=[
  {width:10, height:5},
  {width:10, height:20},
  {width:4, height:16}
];

let acreage=rectangles.map(function(item){
  return item.width*item.height;
});

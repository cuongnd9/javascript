console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
console.log(Math.abs(-12));
console.log(Math.ceil(14.2));// lam tron tren
console.log(Math.floor(19.2));// lam tron duoi
console.log(Math.round(7.51));// lam tron
console.log(Math.max(1,5,2.1,8,8.01));
console.log(Math.min(5,1.2,3,1.25,0.01));
console.log(Math.random());
console.log(Math.pow(4,2));

function tossACoin(){
    return Math.random()>0.5;
}
console.log(tossACoin());
function swap(a,b){
  let c=a;
  a=b;
  b=c;
}
function rollADie(minValue, maxValue){
  if(maxValue < minValue)
    swap(maxValue,minValue);
  let count= maxValue -minValue+1;
  return Math.floor( Math.random() * count ) + minValue;
}
console.log(rollADie(1,6));
console.log(rollADie(10,20));

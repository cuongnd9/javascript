const numbers=[1,2,5,6,9,8,4,3,7];
for(let i=0, len= numbers.length; i<len; i++){
    console.log(numbers[i]);
}
for(let number of numbers){
    console.log(number);
}
let ascNumbers= numbers.sort((a,b)=> a+b);
console.log(ascNumbers);
numbers.forEach(number=> console.log(number));
let sum=0;
numbers.forEach(number=> sum+=number);
console.log(sum);
//-------------------------------------------------
const orange={
    color: 'orange',
    name: 'orange',
    price: 0.5
};
for(let key in orange){
    console.log(key, orange[key]);
}
//--------------------------------------------------

//Use thisArg
function Counter() {
    this.sum=0;
    this.count=0;
}
Counter.prototype.add= function(array) {
    array.forEach(element => {
        this.sum += element;
        ++this.count;
    }, this);
};

let obj= new Counter();
obj.add([1,5,6,9,8,9,4,7,10]);
console.log(obj.count);
console.log(obj.sum);

//
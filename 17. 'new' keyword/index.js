// contructor function
let cat={
    name:'Tom',
    stomach: [],
    eat: function(mouse){
        this.stomach.push(mouse);
        return this;
    }
};
function Mouse(_color, _weight){
    this.color= _color;
    this.weight= _weight;
}
let mouse1= new Mouse('white', 0.5);
let mouse2= new Mouse('black', 0.6);
let mouse3= new Mouse('gray', 0.8);
let mouse4= new Mouse('blue', 0.6);

cat.eat(mouse1).eat(mouse2).eat(mouse3).eat(mouse4); //method chaining
console.log(cat);

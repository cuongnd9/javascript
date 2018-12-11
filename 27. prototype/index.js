function Mouse(_color, _weight){
    this.color= _color;
    this.weight= _weight;
}
//console.log(Mouse.prototype.constructor === Mouse);
Mouse.prototype.sleep= function(){
    console.log('Sleeping......');
};
let mouse1= new Mouse('black',0.5);
console.log(mouse1);
mouse1.sleep();

//Object methods
var myDog={
  name:'4 chan',
  age: 5,
  weight: 10,
  bark: function(){//anonymous function
    console.log('My name is '+this.name);
  },
  eat: function(bone){
    this.weight+=bone.weight;
    return this;
  }
}
myDog['bark']();
myDog.bark();
var bone={weight:0.2};
console.log(myDog.weight);
myDog.eat(bone);
console.log(myDog.weight);

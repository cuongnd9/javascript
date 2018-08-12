var coffeeMachine={
  makeCoffee:function(onFinish){
    console.log('Making coffee...');
    onFinish();
  }
};

var beep=function (){
  console.log('beep...beep...');
};
coffeeMachine.makeCoffee(beep);

function beep(){
  console.log('beep...beep...');
}
coffeeMachine.makeCoffee(beep);

coffeeMachine.makeCoffee(function(){
  console.log('beep...beep...');
});

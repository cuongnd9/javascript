let sayHello = () => console.log('Hello');
let action = setTimeout(sayHello, 2000);
clearTimeout(action);
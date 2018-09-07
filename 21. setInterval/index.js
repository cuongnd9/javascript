let sayHi = () => console.log('Hi!');
let handle = setInterval(sayHi, 1000);
// anonymous function
clearInterval(handle);

let i = 0;
let action = setInterval(() => {
    console.log(i);
    if(i===200) 
        clearInterval(action);
    i++;
}, 100);

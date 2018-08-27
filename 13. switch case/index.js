const numbers = [9,12,5,63,89,99,100,47,15,68,78];
let index = Math.floor( Math.random() * numbers.length);
switch (index) {
  case 0: {
    console.log(index, numbers[index]);
    break;
  }
  case 1: {
    console.log(index, numbers[index]);
    break;
  }
  case 2: {
    console.log(index, numbers[index]);
    break;
  }
  case 3: {
    console.log(index, numbers[index]);
    break;
  }
  default: {
    console.log(-1, -1);
    break;
  }
}
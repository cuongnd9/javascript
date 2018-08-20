const numbers = [10, 5, 58, 99, 100, 45, 90];
let i=0;
while(i < numbers.length) {
    console.log(i, numbers[i]);
    i++;
}
--i;
do {
    console.log(i, numbers[i]);
    --i;
} while(i >= 0)

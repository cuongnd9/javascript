const signale = require('signale');

var text = '🐢 Nguyen Duy Cuong is Nguyen Duy Cuong, jade28, ndc07, j, jj, jjjjj and so on'
var str = '👋 Using Microsoft Windows'

signale.success(text.search('Cuong'))
signale.pending(text.search(/cuong/))
signale.pending(text.search(/cuong/i)) // i: khong phan biet chu HOA hay chu thuong
signale.fatal(str.replace(/microsoft windows/i, 'Linux'))
signale.complete(text.match(/duy/ig)) // g: tim tat ca ket qua, khong dung lai o ket qua dau tien
var str2 = "\nIs th\nis it?"
signale.debug(str2.match(/is/mgi)) // m: thuc hien da dong - multiline
signale.pending(text.match(/cuong/ig)) // tim tat ca cac ket qua khop voi 'cuong'
signale.success(text.match(/[uo]/g)) // tim tat ca cac ket qua co chua cac ky tu trong 'uo'
signale.fatal(text.match(/[0-7]/g)) // tim tat ca cac ket qua khop voi cac so tu 0 - 7
signale.complete(text.match(/jade28|ndc07/g)) // tim tat ca cac ket qua khop voi mot trong 2 pattern
signale.debug(text.match(/\d/g)) // tim tat ca cac so - digits
signale.debug(text.match(/\D/g)) // phu dinh cua so - digits
signale.pending(text.match(/\s/g)) // tim tat ca khoang trang - spaces
signale.pending(text.match(/\S/g)) // phu dinh cua spaces
signale.complete(text.match(/\bCuo/gi)) // tim ket qua o dau hoac cuoi cua tu

// "+": biểu thị phần tử xuất hiện >= 1 lần
console.log(/'\d+'/.test("'123'"));
// => true
console.log(/'\d+'/.test("''"));
// => false
signale.complete(text.match(/jj+/gi)) // Xuat hien 1 hoac nhieu lan

// "*": biểu thị phần tử xuất hiện >= 0 lần (có thể không xuất hiện)
console.log(/'\d*'/.test("'123'"));
// => true
console.log(/'\d*'/.test("''"));
// => true
signale.complete(text.match(/jjj*/gi)) // Xuat hien 0 hoac nhieu lan

// "?": biểu thị phần tử xuất hiện 0 hoặc 1 lần
var neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
// => true
console.log(neighbor.test("neighbor"));
// => true
console.log(neighbor.test("neighbouur"));
// => false
signale.complete(text.match(/jjj?/gi)) // Xuat hien 0 hoac 1 lan

var dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
signale.pending(dateTime.test("30-01-2003 15:20"));
signale.pending(dateTime.test("30-jan-2003 15:20"));

// {n}: biểu thị phần tử xuất hiện đúng n lần
console.log(/\d{4}/.test("1234"));
console.log(/\d{4}/.test("12345"));
console.log(/\d{4}/.test("123"));

// {x,y}: biểu thị phần tử xuất hiện từ x đến y lần
console.log(/\d{2,4}/.test("12345"));
// => true
console.log(/\d{2,4}/.test("1234"));
// => true
console.log(/\d{2,4}/.test("123"));
// => true
console.log(/\d{2,4}/.test("12"));
// => true
console.log(/\d{2,4}/.test("1"));
// => false

// {x, }: biểu thị phần tử xuất hiện >= x lần
console.log(/\d{2,}/.test("12"));
// => true
console.log(/\d{2,}/.test("1234"));
// => true
console.log(/\d{2,}/.test("1"));
// => false

var animalCount = /\d+ (pig|cow|chicken)s?/;
console.log(animalCount.test("15 pigs"));
// => true
console.log(animalCount.test("15 pigchickens"));
// => false

// LOC KET QUA
var quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// => ["'hello'", "hello", index: 9, input: "she said 'hello'"]

console.log(/bad(ly)?/.exec("bad"));
// => ["bad", undefined, index: 0, input: "bad"]

console.log(/(\d)+/.exec("123"));
// => ["123", "3", index: 0, input: "123"]

function findDate(string) {
  var dateTime = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
  var match = dateTime.exec(string);
  if(!match) return null;
  return {
    day : match[1],
    month : match[2],
    year: match[3]
  }
}
var obj1 = findDate("30-1-2003");
console.log(obj1);
// => Object {day: "30", month: "1", year: "2003"}

var obj2 = findDate("0030-1-200300");
console.log(obj2);
// => null

var obj3 = findDate("Hello 30-1-2003 Haha");
console.log(obj3);
// => null
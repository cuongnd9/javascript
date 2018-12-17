let fs= require('fs');
fs.writeFileSync('./text.txt', 'UIT');
let text= fs.readFileSync('text.txt', {encoding: 'utf8'});
console.log(text);

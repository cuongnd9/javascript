// let fs = require('promise-fs');

// function onDone(song) {
//     console.log(song);
// }

// function onError(error) {
//     console.log(error);
// }

// function readFile(path) {
//     return fs.readFile(path, 'utf8');
// }

// readFile('./song1.txt')
//     .then(onDone)
//     .then(() => readFile('./song2.txt'))
//     .then(onDone)
//     .catch(onError);

/////////////////////////////////////////////////////////////////////
    
let fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, 'utf8', function(err, data){
            err ? reject(data) : resolve(data);
        });
    });
}

// readFilePromise('./song1.txt')
//     .then(function(song) {
//         console.log(song);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// readFilePromise('./song1.txt')
//     .then(song1 => {
//         console.log(song1);
//         return readFilePromise('./song2.txt');
//     })
//     .then(song2 => {
//         console.log(song2);
//         return readFilePromise('./song3.txt');
//     })
//     .then(song3 => {
//         console.log(song3);
//     })
//     .catch(error => console.log(error));
    
// Promise.all : khong quan tam thu tu

// Promise.all([readFilePromise('./song1.txt'), readFilePromise('./song2.txt')])
//     .then(songs => console.log(songs))
//     .catch(err => console.log(err));

// Promise.all([ // all promise resolved
//     readFilePromise('./song1.txt'),
//     readFilePromise('./song2.txt'),
//     readFilePromise('./song3.txt')
// ])
//     .then(songs => console.log(songs))
//     .catch(err => console.log(err));

//The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
Promise.race([
    readFilePromise('./song1.txt'),
    readFilePromise('./song2.txt'),
    readFilePromise('./song3.txt')
])
    .then(value => console.log(value));
    // .catch(err => console.log(err)); 
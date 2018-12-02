const fs = require('fs');

function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

async function run() {
    var song1 = await readFilePromise('./song1.txt');
    var song2 = await readFilePromise('./song2.txt');
    return [song1, song2];
}

run().then(values => console.log(values)).catch(error => console.log(error));
// A student management app
let readlineSync = require('readline-sync');
let fs = require('fs');

function showMenu() {
    console.log('1. Show all students');
    console.log('2. Create new student');
    console.log('3. Save && Exit');
    let option = readlineSync.question('< ');
    switch(option) {
        case '1': 
            showStudents();
            showMenu();
            break;
        case '2': 
            createNewStudent();
            showMenu();
            break;
        case '3': 
            saveAndExit();
            break;  
        default:
            console.log('Wrong option');
            showMenu();
            break;          
    }
}

let students=[];

function loadData() {
    let fileContent = fs.readFileSync('./data.json', {encoding: 'utf8'});
    students = JSON.parse(fileContent);
}

function showStudents() {
    for (student of students) {
        console.log(student.name, student.age);
    }
}

function createNewStudent() {
    let name = readlineSync.question('Name: ');
    let age = readlineSync.question('Age: ');
    let student = {
        name : name,
        age : age
    };
    students.push(student);
}

function saveAndExit() {
    let content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content);
}

function main() {
    loadData();
    showMenu();
}

main();
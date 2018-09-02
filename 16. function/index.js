// FUNCTION CALL
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe",
}

var fullName = person.fullName.call(person2);
console.log(fullName);

//The call() Method with Arguments

var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person3 = {
    firstName:"John",
    lastName: "Doe",
}

var fullName = person.fullName.call(person3, 'Tamky', 'Vietnam');
console.log(fullName);

//FUNCTION APPLY

fullName = person.fullName.apply(person3, ['Ho Chi Minh', 'Vietnam']);
console.log(fullName);

//FUNCTION BIND

var person4 = {firstName: 'Jon', lastName: 'Kuperman'};
var person5 = {firstName: 'Kelly', lastName: 'King'};

function say(greeting0, greeting1) {
 console.log(greeting0 + ',' + greeting1 + ' ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person4, 'Hello', 'Good morning');
var sayHelloKelly = say.bind(person5, 'Hello', 'Good morning');

sayHelloJon(); // => Hello,Good morning Jon Kuperman
sayHelloKelly(); // => Hello,Good morning Kelly King
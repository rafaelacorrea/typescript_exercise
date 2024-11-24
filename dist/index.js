"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get greet() {
        return this.name;
    }
}
// Cliente de um banco
class Client extends Person {
    get greet() {
        return 'Dear ' + this.name;
    }
}
// Funcionário de um banco
class Staff extends Person {
    get greet() {
        return 'Hi ' + this.name;
    }
}
let client = new Client('Rafaela', 30);
let staff = new Staff('Frank', 30);
console.log(client.greet, staff.greet);

var Person = /** @class */ (function () {
    function Person() {
        this.myName = 'ts';
    }
    Person.prototype.getName = function () {
        return this.myName;
    };
    return Person;
}());
var person = new Person();
console.log(person.getName());

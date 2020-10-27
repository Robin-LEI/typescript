"use strict";
var Person2 = /** @class */ (function () {
    function Person2(name2) {
        this.name2 = name2;
    }
    Person2.getInstance = function () {
        if (!this.instance) {
            this.instance = new Person2('ts');
        }
        return this.instance;
    };
    return Person2;
}());
var p2 = Person2.getInstance();
var p3 = Person2.getInstance();
console.log(p2 === p3);

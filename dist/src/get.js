"use strict";
var Person1 = /** @class */ (function () {
    function Person1(_name) {
        this._name = _name;
    }
    Object.defineProperty(Person1.prototype, "getName1", {
        get: function () {
            // 加密
            return this._name + ' hello world';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person1.prototype, "name1", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Person1;
}());
var p1 = new Person1('ts');
p1.name1 = 'robin';
console.log(p1.getName1);

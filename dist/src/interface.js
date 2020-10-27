"use strict";
// 类型别名和接口的区别
// 类实现接口
var User21 = /** @class */ (function () {
    function User21() {
        this.name = 'ts';
        this.address = 'china';
    }
    User21.prototype.say = function () {
        return 'hello world';
    };
    return User21;
}());
var say = function (word) {
    return word;
};

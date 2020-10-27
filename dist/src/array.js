"use strict";
var arr = [1, '2'];
var arr2 = ['1'];
var arr3 = [undefined];
// 数组中的每一项对象只能包含name属性
var arr4 = [{ name: 'ts', age: 1 }, { name: 'type', age: 2 }];
var arr5 = [{ name: 'ts', age: 1 }];
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var arr6 = [new Teacher(), { name: 'ts', age: 1 }];

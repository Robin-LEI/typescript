"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 类的继承
var MyTeacher = /** @class */ (function (_super) {
    __extends(MyTeacher, _super);
    function MyTeacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyTeacher.prototype.getTeacherName = function () {
        return 'teacher';
    };
    // 子类可以重写父类
    MyTeacher.prototype.getName = function () {
        return _super.prototype.getName.call(this) + 'hello';
    };
    return MyTeacher;
}(Person));
// 访问类型
// private public protected
// 默认是public 访问类型修饰符，允许我在类的内外访问
// private 允许在类的内部使用
// protected 允许在类内核继承的子类中使用
// public readonly name: string;

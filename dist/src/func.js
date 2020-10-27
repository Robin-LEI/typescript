"use strict";
function add(first, second) {
    return first + second;
}
function add2(first) {
    console.log(first);
}
function add3() {
    throw new Error('error');
    // 或者
    while (true) { }
}
function add4(_a) {
    var first = _a.first, second = _a.second;
    console.log(first + second);
}
function add5(_a) {
    var first = _a.first;
    console.log(first);
}

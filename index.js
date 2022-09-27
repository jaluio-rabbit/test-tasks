"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
var Test;
(function (Test) {
    Test.test = "hello, world!";
    Test.getPass = (data) => data;
})(Test = exports.Test || (exports.Test = {}));
console.log(Test.getPass(0));

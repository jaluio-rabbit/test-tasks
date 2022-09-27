"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const _1 = require(".");
var Game;
(function (Game) {
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getPass(data) {
            // Import
            /// <reference path="index.ts" /> // <--- Import
            console.log(_1.Test.getPass(0));
            return data;
        }
    }
    class Student extends User {
        constructor(name, age) {
            super(name, age);
        }
    }
    const student_1 = new Student("A", "2");
    student_1.getPass("Ha-ha-ha!");
    console.log(student_1);
})(Game = exports.Game || (exports.Game = {}));

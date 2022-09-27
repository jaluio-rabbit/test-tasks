"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./game");
var Ghoul;
(function (Ghoul_1) {
    var _Ghoul_instances, _Ghoul_sayComplete;
    class Ghoul {
        // Import
        /// <reference path="game.ts" /> // <--- Import
        constructor(name, age, kagune, dangerous) {
            this.name = name;
            this.age = age;
            this.kagune = kagune;
            this.dangerous = dangerous;
            _Ghoul_instances.add(this);
            this.name = name;
            this.age = age;
            this.kagune = kagune;
            this.dangerous = dangerous;
        }
        createUser() {
            console.log(game_1.Game);
        }
        tellEveryone() {
            __classPrivateFieldGet(this, _Ghoul_instances, "m", _Ghoul_sayComplete).call(this);
        }
    }
    _Ghoul_instances = new WeakSet(), _Ghoul_sayComplete = function _Ghoul_sayComplete() {
        const keyPharse = "Task is completed";
        console.log(keyPharse);
    };
    class Koukagune extends Ghoul {
        constructor(name, age, kagune, dangerous) {
            super(name, age, kagune, dangerous);
            this.name = name;
            this.age = age;
            this.kagune = kagune;
            this.dangerous = dangerous;
        }
        get GhoulName() {
            return this.name;
        }
        set GhoulAge(age) {
            console.log(this["GhoulAge"]);
            this.age = age;
        }
        get GhoulAge() {
            return this.name;
        }
        set GhoulKagune(kagune) {
            this.kagune = kagune;
        }
        get GhoulKagune() {
            return this.kagune;
        }
        set GhoulDangerous(dangerous) {
            this.dangerous = dangerous;
        }
        get GhoulDangerous() {
            return this.dangerous;
        }
    }
    // 🤣 d e a d   i n s i d e 🤣
    const dead_inside = new Koukagune("Kaneki Ken", 18, "normal", "A");
    console.log(dead_inside);
    dead_inside.GhoulAge = 23;
    dead_inside.GhoulKagune = "low";
    dead_inside.GhoulDangerous = "SS";
    console.log(dead_inside);
})(Ghoul || (Ghoul = {}));

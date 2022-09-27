"use strict";
;
const cat = {
    title: "British cat",
    description: "The cutest animal.",
    quantity: 200000,
};
;
const Lasunka = {
    title: "Lasunka",
    description: "Just the ice-cream",
    opinion: "Not bad",
};
const favoritesNetwork = {
    youtube: { title: "youtube" },
    facebook: { title: "facebook" },
    twitter: { title: "twitter" }
};
const completed = {
    quantity: 1,
    list: ["geography tests"]
};
const opened = {
    quantity: 1,
    list: ["homework"]
};
const goodMark = "10";
const normalMark = "9";
const box = {};
function getSomething(input) {
    return +input * 2;
}
console.log(getSomething("3"));
function testFoo(num1, num2) {
    return { a: num1, b: num2 };
}
class BitterFood {
    constructor(title = "unknown") {
        this.title = title;
        this.description = "Bitter Food";
        this.title = title;
    }
}
class Perets extends BitterFood {
    constructor(title = "unknown") {
        super(title);
        this.title = title;
        this.description = "Bitter Food";
    }
}

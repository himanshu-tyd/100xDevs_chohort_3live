"use strict";
let x = 1; //type interface
x = 4;
console.log(x);
function hello(name) {
    console.log(`hello ${name}`);
}
hello('himanshu');
function sum(x, y) {
    return x + y;
}
console.log(sum(3, 6));
function ageMap(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(ageMap(30));
function delayCall(fn) {
    setTimeout(fn, 5000);
}
delayCall(() => {
    console.log("hey");
});

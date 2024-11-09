"use strict";
// let x:number=1 //type interface
function greet(user) {
    console.log(user.name);
}
const user = {
    name: 'himanshu',
    age: 3
};
greet(user);

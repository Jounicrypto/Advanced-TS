"use strict";
newFunction();
function newFunction() {
    console.log(Math.floor(10.5));
}
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["A", "B", "C", "D", "E"];
let arrayThree = [1, 2, 3, 4, 5, "A", "B", "C", "D", "E"];
let arrayFour = [1, 2, 3, 4, 5, "A", "B", "C", ["D", "E"], true, false];
let showMsg = true;
function showDetails(name, age, salary) {
    if (showMsg) {
        return `Hello ${name}, Age Is ${age}, Salary is ${salary}`;
    }
    return `No Data To Show`;
}
console.log(showDetails("Adnan", 25, 5000));
function showData(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData("Adnan", 25));
function addAllOn(...nums) {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
}
console.log(addAllOn(10, 20, 30, 40, 50, 100, 2.5, +true));
const add = function (num1, num2) {
    return num1 + num2;
};
console.log(add(10, 20));
const addWithArrow = (num1, num2) => num1 + num2;
console.log(addWithArrow(10, 20));
function getActions(btns) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
}
getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });
function compare(num1, num2) {
    if (num1 === num2) {
        return 0;
    }
    else if (num1 > num2) {
        return 1;
    }
    else {
        return -1;
    }
}
console.log(compare(20, 20));
console.log(compare(20, 15));
console.log(compare(20, 30));
let myNumber = 1;
//# sourceMappingURL=index.js.map
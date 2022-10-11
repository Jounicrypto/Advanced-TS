newFunction();

function newFunction() {
    console.log(Math.floor(10.5));
}

//Type annotations With Multidimensional Array

let arrayOne: (number)[] = [1, 2, 3, 4, 5];
let arrayTwo: (string)[] = ["A", "B", "C", "D", "E"];
let arrayThree: (string | number )[] = [1, 2, 3, 4, 5, "A", "B", "C", "D", "E"];


let arrayFour: (number | string | string[] | boolean)[] = [1, 2, 3, 4, 5, "A", "B", "C", ["D", "E"], true, false]


/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/



let showMsg = true;

function showDetails(name: string, age: number, salary: number): string{
    if (showMsg){
        return `Hello ${name}, Age Is ${age}, Salary is ${salary}`
    }
    return `No Data To Show`;
}

console.log(showDetails("Adnan", 25, 5000))



/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function showData (name: string, age: number, country?: string ){
    return `${name} - ${age} - ${country}`
}

console.log(showData("Adnan", 25))



/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

// function addAll(...nums: number[]){
//     let result = 0;
//     for (let i = 0; i < nums.length; i++){
//         result += nums[i]
//     }
// }

function addAllOn(...nums: number[]){
    let result = 0;
    nums.forEach((num) => result += num);
    return result
}

console.log(addAllOn(10,20,30,40,50,100,2.5, +true));

/*
  Function
  - Anonymous Function
  - Arrow Function
*/

const add = function(num1: number, num2: number) : number {
    return num1 + num2;
}
console.log(add(10,20))


const addWithArrow = (num1: number, num2: number) : number => num1+num2

console.log(addWithArrow(10,20))



/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
    up: string,
    right: string,
    down: string,
    left: string
  }
  
  type Last = Buttons & {
    x: boolean
  }
  
  function getActions(btns: Last) {
    console.log(`Action For Button Up Is ${btns.up}`);
    console.log(`Action For Button Right Is ${btns.right}`);
    console.log(`Action For Button Down Is ${btns.down}`);
    console.log(`Action For Button Left Is ${btns.left}`);
  }
  
  getActions({ up: "Jump", right: "Go Right", down: "Go Down", left: "Go Left", x: true });



/*
  Data Types
  - Literal Types
*/

type nums = 0 | 1 | -1;

function compare(num1: number, num2: number) : nums {
  if (num1 === num2) {
    return 0;
  } else if (num1 > num2) {
    return 1;
  } else {
    return -1;
  }
}

console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: nums = 1;



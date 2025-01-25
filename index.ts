// Defining Types

var firstName: string = "Bithun";
var subscribers: number = 5000;

var array: string[] = ["man", "sulaiman"];
var array1: [] = [];

let object: { name: string; age: number } = {
    name: "Bithun",
    age: 24,
};
// interface

interface Details {
    name: string;
    age: number;
    getName: () => void
};

let object1: Details = {
    name: "Bithun",
    age: 24,
    getName() {
        console.log(this.name);

    },
};

// Type

type Details1 = {
    name: string;
    age: number;
    getName: () => void
};

let object2: Details1 = {
    name: "Bithun",
    age: 24,
    getName() {
        console.log(this.name);

    },
};

// union

let object3: { name: string; age: number | string } = {
    name: "Bithun",
    age: '5'
};

let array2: (string | number)[] = [1, 2, 3, 'hai'];

// functions

function getUserName(object2: Details1):string {
    return object2.name
};
const value=getUserName(object2);




function getUserName1({name,age}:{name:string;age:number}){
return name
};
getUserName1({name:'Bithun',age:24})
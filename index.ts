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

function getUserName(object2: Details1): string {
    return object2.name
};
const value = getUserName(object2);




function getUserName1({ name, age }: { name: string; age: number }) {
    return name
};
getUserName1({ name: 'Bithun', age: 24 })

function getUserName2(object2: Details1): void {
    console.log(object2.name);

};

// Named types
type Names = 'Athira' | 'Anu'
let friend: Names = 'Athira';

// function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string
function add(a: any, b: any): any {
    return a + b
};

add(2, 2);  //4
add('2', '2'); //22

//Generics
function getAge<T>(age: T): T {
    return age
};

getAge<number>(24);
getAge<string>('24');

//Enum
// enum StatusType{
//     PENDING,
//     COMPLETED,
//     FAILED
// };
// function getStatus(orderId:string,status:StatusType){
// console.log(orderId ,'=',status);

// };
// getStatus('123',StatusType.COMPLETED);

//as const
let fname = 'Athira' as const;

//typeof keyof
const StatusType = {
    PENDING: 'pending',
    COMPLETED: 'completed',
    FAILED: 'failed'
} as const;

function getStatus(orderId: string, status: keyof typeof StatusType) {
    console.log(orderId, StatusType[status]);

};
getStatus('123', 'COMPLETED');

//utility types
type Users = {
    name: string;
    age: number;
};
// let userDetails:Readonly<Users>={
//     name:'Athira',
//     age:25
// }
// let userDetails:Partial<Users>={
//     name:'Athira',

// }
// let userDetails:Required<Users>={
//     name:'Athira',
//     age:25
// }
// let userDetails:Pick<Users,'name'>={
//     name:'Athira',

// }
let userDetails: Omit<Users, 'age'> = {
    name: 'Athira',

};

type StatusType = 'pending' | 'completed' | 'failed'
let statuss: Exclude<StatusType, 'failed'> = 'completed';

// type Food ={
//     PIZZA:'pizza',
//     BIRIYANI:'biriyani'
// }
type Food = Record<string, string>
type Foods= {
    [index:string]:string
}
let food: Food = {
    pizza: 'Pizza',
    biriyani: 'Biriyani'
};

//any/unknown/never/void/null
let userName: unknown = 'Athira'
let newValue = userName as string;
function error(message: string): never {
    throw new Error(message)
};
function errors(message: string): void {
    console.log(message);

}
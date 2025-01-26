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
getStatus('123', 'COMPLETED')
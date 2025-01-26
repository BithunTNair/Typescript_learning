// Defining Types
var firstName = "Bithun";
var subscribers = 5000;
var array = ["man", "sulaiman"];
var array1 = [];
var object = {
    name: "Bithun",
    age: 24,
};
;
var object1 = {
    name: "Bithun",
    age: 24,
    getName: function () {
        console.log(this.name);
    },
};
var object2 = {
    name: "Bithun",
    age: 24,
    getName: function () {
        console.log(this.name);
    },
};
// union
var object3 = {
    name: "Bithun",
    age: '5'
};
var array2 = [1, 2, 3, 'hai'];
// functions
function getUserName(object2) {
    return object2.name;
}
;
var value = getUserName(object2);
function getUserName1(_a) {
    var name = _a.name, age = _a.age;
    return name;
}
;
getUserName1({ name: 'Bithun', age: 24 });
function getUserName2(object2) {
    console.log(object2.name);
}
;
var friend = 'Athira';
function add(a, b) {
    return a + b;
}
;
add(2, 2); //4
add('2', '2'); //22
//Generics
function getAge(age) {
    return age;
}
;
getAge(24);
getAge('24');
//Enum
var StatusType;
(function (StatusType) {
    StatusType[StatusType["PENDING"] = 0] = "PENDING";
    StatusType[StatusType["COMPLETED"] = 1] = "COMPLETED";
    StatusType[StatusType["FAILED"] = 2] = "FAILED";
})(StatusType || (StatusType = {}));
;
function getStatus(orderId, status) {
    console.log(orderId, '=', status);
}
;
getStatus('123', StatusType.COMPLETED);

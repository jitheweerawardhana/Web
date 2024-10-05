console.log("Run external Script");

document.write('ACPT')

document.write('<h1>ACPT NEW</h1>')

document.write('<button style="background-color: black; color: white; height:50px;">ACPT new button </button><br>')

document.write('<input type="text"></input>')


//java script data type

// 1. numbers
const num = 25.9

// 2. String any string

const string = "ACPT"
// 3. boolean true or false

const bool = true
// 4. Arrays  

const array = [15, 'ACPT', true,]
// 5. object

const obj = {
    name: "acpt",
    address: "panadura"
}

//Global Scops nomarl scop

const global = ''

//Funtion scops api hadana funtion atule tiyn scop

function settime() {
    const time = 30;
}

// Block Scops If while wge dna ewt block scope widiht wtene ------- ES6 eken psse tm block scope ek add une

{
    const block = ''
}
if (true) {

}

//Variable Types
// Var , Let , Const

//var   re ****  diclar krna puluwn **** re asign krn puluwn **** block scop ekk atle hdn variable ekk pita access krn puluwn

var n = 'ACPT'
console.log(n)
var n = 10
console.log(n)

{
    var y = 20;
}
console.log(y)


// LEt **** can't re declayr  **** re asign krna puluwn  *** block scop eke tiyn ekk  pita use krn ba 

let dd = 12;
dd = 100;
console.log(dd)

//Const  **** re diclayr krn ba ***re asign krna ba  *** block scop eke tiyn ekk  pita use krn ba 

const cc = 'acpt'

//  {
//     const cv = 90
//  }
//  console.log(cv)

const w = 10;
const q = 20;

console.log(w + q)

console.log(q - w)

console.log(q / w)

console.log(q % w)

let t = 5;

t++
console.log(t)

t--
console.log(t)

// comparing operation

const m = 20;
const v = 5;

console.log(m == v)

console.log(m != v)

console.log(m > v)

console.log(m < v)

console.log(m >= v)

console.log(m <= v)

const log = true;
const con = false;

console.log(log && con)

console.log(log || con)

const a = 10;
const b = 20;

if (b == a) {
    console.log("True")
}
else if (a < b) {
    if (a == 10) {
        console.log("A is low")
    }
}
else {
    console.log("Nothing")
}

const aw = 'acpt'
switch (aw) {
    case 'acpt2':
        console.log("one");
        break;

    case 'acpt3':
        console.log("two")
        break;

    default:
        console.log("I dont know")

}

for (var i = 0; i < 5; i++) {
    console.log("print", i);
}

const array1 = [10, 20, 30, 40, 55, 35];
for (var i = 0; i < a; i++) {
    console.log("print", array1[i]);
}

// let f = 0;
// while (f= array.length){
//         console.log("print",array[f]);
// }

let l = 0;

do {
    console.log("print", array1[l]);
    l++;
}

while (l < array1.length)



// Array
const fruits = ["banana", "mango", "apple", "orange"]
//console.log(fruits[2])

//POP
//  const fruit = fruits.pop();
//  console.log(fruit)
//  console.log(fruits) 

//Push
//  fruits.push("KIWI")
//  console.log(fruits)

//shift
// const fruit = fruits.shift();
// console.log(fruit)
// console.log(fruits)

//Unshift
// fruits.unshift("KiWi");
// console.log(fruits)

fruits.forEach((val) => { console.log(val) })

//Object

const car = {
    brand: 'BMW',
    color: 'black',
    wheel: 4,
    Drive: function () {
        console.log("Drive car")
    },
    Break: function () {
        console.log('Brake car...')
    }
}

// console.log(car.brand);
// car.Dreive();
// car.Brake();

//Function

//name function
function printName() {
    console.log("Print ACPT");
}

printName();

//Anonymous Function
const fun = function () {
    console.log("print Anonymous");
}

fun();

//Arrow function
const student = () => {
    console.log("Arrow Print")
}

student();

const stu = (name) => {
    console.log(name)
}

stu("ACPT");
stu("if you want any thing")

// function EqualNumber (){
//     console.log(30+60)
// }
// EqualNumber();


// function EqualNumber (num1,num2){
//     console.log(num1+num2)
// }

// EqualNumber(30,70); 

// function EqualNumber (num1,num2){
//     const total = num1+num2
//     console.log(total)
// }
// EqualNumber(30,120); 

// const EqualNumber = (num1,num2)=>{
//     const total = num1+num2
//     console.log(total)
// }
// const val1 = EqualNumber(30,120); 
// console.log(val1)
// const val2 = EqualNumber(70,130); 
// console.log(val2)

// const EqualNumber = ( num1,num2 ) => { return num1+num2 }
//     const val1 = EqualNumber(30,70);
//     console.log(val);


const genStudent = (name, marks) => {
    let ans = ''
    if (marks < 60) {
        ans = name + " is fail"
    }
    else {
        ans = name + " is Passed"
    }
    return ans;
}

const answer = genStudent("kamal,90");
console.log(answer)


//Event

function clickEvent() {
    console.log('Click me');
}

function onChangeEvent() {
    console.log('On Change');
}

function onMouseOverEvent() {
    document.getElementById("mouseOver").style.backgroundColor = "red";
}
function onMouseOutEvent() {
    document.getElementById("mouseOver").style.backgroundColor = "black";
}

//key down event 
function onKeyDownEvent(){
    const val = document.getElementById('input').value;
}

//key up event 
function onKeyUpEvent(){
    const val = document.getElementById('input').value;   
}

//key up pressevent 
function onKeyPressEvent(){
    const val = document.getElementById('input').value;   
    console.log(val);
}
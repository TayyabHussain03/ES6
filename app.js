// **********Template Strings********** 

// Old JS

// let a = "tayyab"
// let b = "hussain"
// console.log("my name is" + a + "" + b)

// In ES6

// let a = "tayyab" ;
// let b = "hussain";
// console.log(`my name is ${a} ${b}`)

// **********Destructuring Array**********

// Old JS

// let user = ['tayyab', '18', 'male']
// let name = user[0]
// let age = user[1]
// let gender = user[2]

// console.log(age)

// In ES6

// let user = ['tayyab', '18', 'male']
// let[name,age,gender]=user
// console.log(name)

// **********Destructuring Object**********

// Old JS

// let user={
//     name: "tayyab",
//     age: 18,
//     male: "gender"
// }

// console.log(user.name)
// console.log(user.age)

// In ES6

// let user = {
//     name: "tayyab",
//     age: 18,
//     male: "gender"
// }

// let{name,age,male}=user
// console.log(name,age)

// **********Default Operator**********

// Old JS

// function mult(a,b){
//     console.log(a*b)
// }
// mult(4)

// In ES6

// function mult(a,b=2){
//     console.log(a*b)
// }
// mult(4)

// **********Rest Operator**********

// Old JS

// function check(a,b){
//     console.log(a,b)
// }
// check(1,2,3,4,5,6,7,8)

// In ES6

// function check(a,...b){
//     console.log(a,b)
// }
// check(1,2,3,4,5,6,7,8)

// **********Spread Opertor**********

// *****1st Use*****

// Old JS

// function sum(a,b,c){
//     console.log(a+b+c)
// }

// sum(5,5,6)

// In ES6

// for array indexing sum

// function sum(a, b,c) {
//     console.log(a + b + c)
// }
// let arrVal = [5, 5, 7]
// sum(...arrVal)

// *****2nd Use*****

// array concatenation

// Old JS

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr1 + "," + arr2)

// In ES6

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log(...arr1,...arr2)

// *****3rd Use*****

// push elements in array

// Old JS

// let arr1 = [1,2,3]
// let arr2 = arr1
// arr2.push(4,5,arr1)
// console.log(arr2)
// console.log(arr1)

// In ES6

// let arr1 = [1,2,3]
// let arr2 = [4,5,...arr1]
// console.log(arr2)
// console.log(arr1)

// **********Arrow Function**********

// Old Js

// function sub(){
//     let a = 56
//     let b = 20
//     return a-b
// }
// console.log(sub())

// OR

// function sub(a,b){
//     return a-b
// }
// console.log(sub(23,22))

// OR

// let a=99
// function sub(b){
//     return a-b
// }
// console.log(sub(4))

// In ES6

// let sub =()=>{
//     let a = 4
//     let b = 2
//     return a-b
// }
// console.log(sub())

// OR

// let b = 2
// let sub =()=>{
//         let a = 4
//         return a-b
//     }
//     console.log(sub())

// OR

// let a = 4
// let sub = (b) => {
//     return a - b
// }
// console.log(sub(9))

// OR

// let a = 4
// let b = 2
// let sub = () => a - b
// console.log(sub())

// **********Promise**********

// let getData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true) {
//                 resolve(alert("Hello World"))
//             } else {
//                 reject("error agaya")
//             }
//         }, 8000)
//     })
// }

// getData()
//     .then(res => console.log("then===>",res))
//     .catch(err => console.log("catch==>",err))

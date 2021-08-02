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

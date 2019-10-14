let sum = 20
let sub = 50
let add = sum % sub
console.log(add)
let adds = sub % sum
console.log(adds)

//==
var x = 5,x2 = '5';
var x3 = x == x2;
//===
var x4 = x === x2;

// a group of interrelated statements makes up a function
//function definition
console.log("FUNCTIONS")
function addNums(){
    let num1 = 20;
    let num2 = 10;
    let num3 = num1 + num2;
    console.log('the sum of num1 and num2, num3 = num1 + num2 = ' ,num3)
    return num3;
}
//addNums();
function subNums(){
    //the return value from addNums = num3 is used here Expose Num3 to be used in other functions
   let diff = addNums() - 20
   console.log('the difference is = ', diff)
}
//FX INVOCATION
//addNums();
subNums();



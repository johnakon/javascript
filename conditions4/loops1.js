// Example 1: loops
// var mySalary = 200
// var yourSalary = 1000

/*
if(mySalary > yourSalary){
    console.log('My salary is greater than your salary !')
}
else if(mySalary < yourSalary){
    alert('My salary is less than yours !');
}*/

// Example 2

/* instead of writing if statements, we can write switch statements
    having case, break and default
*/
var mySalaryPay = 20000
switch (mySalaryPay) {
    // case 5000:
    //     console.log('That is not = 20000')
    case 5000:
    let x = mySalaryPay * 5000
    console.log('That is not = 20000')
        break;
    case 500000:
        console.log('That is not 200000 and is way morethan 20000')
        break;
    default:
        console.log('sorry , ' + mySalaryPay + ' is the default value for salary');
}

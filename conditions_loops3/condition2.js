//function to add two parameters a and b
let num = ( a , b ) => {
    let c =  a + b
    console.log('the sum of the two numbers a and b is : ' + c)
}
num(5,7)
num(1,4)
num(3,5,6)
console.log()

// if , else statement
var num1 = 20, num2 = 40
if(num1 > num2){
    console.log('you have passed')
}
else{
    console.log('you have failed!')
}
console.log()


/* an employee is subjected to paye of 30% of what he earns only if paye is > 130k
write a function to take pay as param and calculates the paye for someone
*/

let payeFee = (salary) => {
    if(salary >= 130000){
        let fee = pay * ( 30 / 100)
        console.log('The employee pays an amount of : ' + fee)
        return payeFee
    }
    else{
        console.log('Please enjoy your salary wisely!')
    }
}
payeFee(50000)





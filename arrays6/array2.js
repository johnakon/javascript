/* what is the position of 50 in this array */
let oranges = [20, 30, [40, 50], 90]
/* console.log('The value of 50 in the oranges array is = oranges[2][1] which is = ' + oranges)  */
let indexValue = oranges.indexOf(90)
console.log('The index value of 90 is  = ' + indexValue)
/* want to output index of 50  ???*/
let indexValueOfFifty = oranges.indexOf(40)
console.log('The index value of 50 is  = ' + indexValueOfFifty)
console.log()


/* write a for loop to output thoses values in this array 8 */
var mangoes = [20, 40, 60, 80]
for (let item = 0; item < mangoes.length; item++) {    /* item <= 3 or item < 4 */
    console.log('The output of the values is : =  ' + mangoes[item])    
}

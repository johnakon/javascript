// create a function that calculates it, compares two employees salaries of PAYE, and checks who pays more



let salaryCompare = (employeeSalary1, employeeSalary2) => {
    var payeEmployee1 = employeeSalary1 * (30 / 100)
    var payeEmployee2 = employeeSalary2 * (30 / 100)
    console.log('Employee1 has a Pay As You Earn of : ' + payeEmployee1)
    console.log('Employee2 has a Pay As You Earn of : ' + payeEmployee2)
    console.log()


    if ((payeEmployee1 && payeEmployee2) >= 130000) {
        
        let highEmployeeSalary = ((payeEmployee1 > payeEmployee2) ? payeEmployee1 : employeeSalary2)
        console.log('The highest taxable Pay As You Earn salary is ' + highEmployeeSalary)
        console.log()

        if (payeEmployee1 > payeEmployee2) {
            console.log('Hello, please remember to contribute for Johns wedding tomorrow')
        }
        else {
            console.log('Please just come for the meetings for Johns wedding')
        }
    }
    else {
        console.log("One or all the employers salary is not taxable")
    }
}
    salaryCompare(900000, 1000000)


/* working with objects */
var students = { 
    name:"johntel",
    age: 50,
    gender: "M",
    date_of_birth: 1743
} 
// writing a method for this object
// console.log(students.name)

/* when having many objects, we shall use a constructor */
console.log('Lets use a constructor')
console.log('')
function student(name, age, gender, date_of_birth){
    this.name = name
    this.age = age
    this.gender = gender
    this.date_of_birth = date_of_birth
}

/* now lets create students out of this */
var student1  = new student('John', 29, 'M', 1990) /* new is the constructor  */
var student2  = new student('Johni', 30, 'M', 1989)

console.log("The first student was " + student1.name + " and his age is " + student1.age)


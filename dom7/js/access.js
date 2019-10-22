/* 5 method to access DOM elemnets using js : 
getElementById, getElementsByClassName, getElementsByTagName,querySelector, querySelectorelectAll

Assigning all elements to their appropriate methods*/
const demoId = document.getElementById('demo')
const demoClass = document.getElementsByClassName('demo')
const demoTag = document.getElementsByTagName('article')
const demoQuery = document.querySelector('#demo-query')
const demoQueryAll = document.querySelectorAll('.demo-query-all')

/* changing border color if id demo to purple */
demoId.style.border='2px solid purple'

 /* demoClass  - elements with class demo */
for (let i  = 0; i < demoClass.length; i++) {
    demoClass[i].style.border = '2px solid orange'
}

/* change border of all tags */
for (let i  = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = '2px solid blue'
}
demoQuery.style.border = '2px solid red'


demoQueryAll.forEach(
    query =>{
        query.style.border  = '2px solid green'
    }
)


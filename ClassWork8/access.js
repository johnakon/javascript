// five methods of accessing dom elements using different js methods
//assigning elements to their appropriate methods
const demoId=document.getElementById('demo');
const demoClass=document.getElementsByClassName('demo')
const demoTag =document.getElementsByTagName('article')
const demoQuerry=document.querySelector('#demo-querry')
const demoQuerryAll=document.querySelectorAll('.demo-querry-all')
// changing the border color of id demo to purple
demoId.style.border='2px solid purple' 

for (let i=0;i<demoClass.length;i++)
{
    demoClass[i].style.border='2px solid orange'
}
for(let i=0; i<demoTag.length; i++)  {
    demoTag[i].style.border='2px solid blue'
}
demoQuerry.style.border='2px solid red'
demoQuerryAll.forEach(
    query=>{
        query.style.border='2px soloid green'
    }

);

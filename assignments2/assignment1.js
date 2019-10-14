
// define three functions;
// first function should add 3 numbers 30,60,100
// second function should multiply the result from fx 1 by 2
// third function should find the remainder by dividing fx 2 by 15

//this add() function adds 3 variables a , b and c
function add(){
   let a = 30;
   let b = 60;
   let c = 100;
   let d = a + b + c
   console.log('the sum of a,b,c is = ' + d)
   return d
}

//this getAdd()  function gets results from add() function and multiplies it by 2
function getAdd(){ 
    let getAddResult = add() * 2
    console.log('getAddResult is for multpilying by 2 = ' + getAddResult)
return getAddResult
}

//this getAddResults() function uses results from getAdd() function, and gets the remainder after dividing by 15
function getAddResults(){
  let getRemainder = getAdd() % 15
  console.log('this gets remainedr from getAdd function = '  + getRemainder)
  return getRemainder;
}
getAddResults();

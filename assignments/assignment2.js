// Assignment 2
/*
   -  write a function thats takes two test marks i.e  test1, and test2
   -  when it gets the marks, it should check for the best mark from the two and return it
   -  create another function for coursework mark requiring one parameter  -  a coursework mark, check it
      then get average of coursework and return current coursework value
   -  write the final function that takes a single parameter, computes the mark exam , as well as final Exam        mark.

    what is the exam mark of the student ?
*/

//function that aks someone two marks and returns best mark of the two
function testMarks(test1,test2) {
    let bestTestMark = (test1 > test2) ? test1 : test2;

    return bestTestMark;
}

//function to get coursework mark
function courseworkMark(coursework) {
    let courseworkCurrentMark = testMarks(70 , 80) + coursework;
    let averageCourseWorkMark = courseworkCurrentMark / 2;

    let curentcourseworkMark =  averageCourseWorkMark * (40 / 100);

    return curentcourseworkMark;
}

//function to calculate our final exam mark
function examMark(computedMark) {
    let generalExamMark = computedMark * (60 / 100)
    let finalMark = generalExamMark + courseworkMark(80)

    console.log('your final exam mark is : ' + finalMark);
}
examMark(90);



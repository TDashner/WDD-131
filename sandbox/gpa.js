function convertGradeToPoints(grade) {

}

function calculateGpa(gpaPoints) {
    
}

function cleanGrade(grade) {
    return grade.trim().toUpperCase();
}

function getGrades() {
// get grades from input
    const gradesElement = document.querySelector("#grades");
// split grades on comma
    let grades = gradesElemement.value.split(",");
// clean up whitespace
// convert all grades to uppercase
    grades = grades.map(cleanGrade);
// return the grade list 
    return grades;
}

function calculateHandler(event) {
// get the grades
    const grades = getGrades();
    const gpaPoints = grades.map(convertGradeToPoints);
//output the gpa to the browser
    const gpa = calculateGpa(gpaPoints);
// calculate gpa
    outputGpa(gpa, "#output");
}

function outputGpa(gpa, selector) {
    const outputElement = document.querySelector(selector);
    output
}

document.querySelector("#submitButton").addEventListener("click", calculateHandler);

"use strict";
// IF... ELSE IF... ELSE STATEMENT
// Function to get student grade based on score
function getStudentGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}
// Student scores
const studentScore1 = 95;
const studentScore2 = 82;
const studentScore3 = 68;
// Display grades for each student
console.log(`Student 1 scored ${studentScore1}. Grade: ${getStudentGrade(studentScore1)}.`);
console.log(`Student 2 scored ${studentScore2}. Grade: ${getStudentGrade(studentScore2)}.`);
console.log(`Student 3 scored ${studentScore3}. Grade: ${getStudentGrade(studentScore3)}.`);

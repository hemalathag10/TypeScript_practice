// BREAK STATEMENT

const fruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
const targetFruit: string = "Orange";

let fruitFound = false; // Renamed 'found' to 'fruitFound' for better clarity

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === targetFruit) {
        fruitFound = true;
        console.log(`${targetFruit} found at index ${i}.`);
        break; // Stop searching once the target fruit is found
    }
}

if (!fruitFound) {
    console.log(`${targetFruit} not found in the array.`);
}


//------------------------------------------------------------------------
// CONTINUE STATEMENT

const studentScores: number[] = [85, 92, 78, 65, 90, 88, 75, 95];
const passingScore: number = 70;

let totalScore = 0;
let numberOfPassingStudents = 0;

for (let score of studentScores) { // Using 'const' for 'score' in the loop
    if (score < passingScore) {
        // Skip processing for students with scores below passingScore
        continue;
    }
    totalScore += score;
    numberOfPassingStudents++;
}

let averageScore = 0;

// Avoid division by zero
if (numberOfPassingStudents !== 0) { // Use nullish operator for better readability
    averageScore = totalScore / numberOfPassingStudents;
}

console.log(`Number of passing students: ${numberOfPassingStudents}`);
console.log(`Average score of passing students: ${averageScore.toFixed(2)}`);

let score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 60:
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log("The grade is :", grade);

/*
output:
The grade is : D
*/
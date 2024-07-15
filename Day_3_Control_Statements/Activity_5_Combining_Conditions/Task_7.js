let year = 2024;

if(year % 4 === 0){
    if(year % 100 !== 0){
        console.log("Leap Year");
    }else if(year % 400 === 0){
        console.log("Leap Year");
    }else{
        console.log("Not a Leap Year");
    }
}

//short one liner methode
// console.log(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? "Leap Year" : "Not a Leap Year");

/*
output:
Leap Year
*/
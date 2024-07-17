let max = function checkMaximum(a,b){
    if(a===b){
        console.log("both the numbers are equal");
    }
    else{
        if(a>b){
            console.log(a, "is greater than" , b);
        }
        else{
            console.log(b, "is greater than", a);
        }
    }
}

max(44,80);

/*
Output:

80 is greater than 44
*/
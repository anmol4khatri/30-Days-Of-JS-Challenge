let checkChar = (str, char) => {
    let found = false;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            console.log("Character found");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("Character not found");
    }
}

checkChar("hello", "h");

/*
Output:

Character found
*/
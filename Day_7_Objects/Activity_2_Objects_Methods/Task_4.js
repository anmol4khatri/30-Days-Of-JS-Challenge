let book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,

    updateInfo: function(newYear) {
        this.year = newYear;
    }
};

book.updateInfo(2024);
console.log(book);

/*
Output:

title: 'The Alchemist',
author: 'Paulo Coelho',
year: 2024
*/
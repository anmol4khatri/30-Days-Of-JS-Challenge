let library = {
    name: "City Library",
    books: [
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            year: 1988
        },
        {
            title: "The Little Prince",
            author: "Antoine de Saint-Exupéry",
            year: 1943
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    ]
};

console.log(library.name);
for(let i=0; i<library.books.length; i++){
    console.log(library.books[i].title);
}

/*
Output:

After unshift: [ 0, 1, 2, 3, 4, 5 ]
*/
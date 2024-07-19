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

for (let i in library.books){
    console.log(library.books[i].title);
}
/*
Output:

The Alchemist
The Little Prince
1984
*/
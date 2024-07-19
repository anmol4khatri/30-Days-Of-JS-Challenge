let book = {
    title: "The Alchemist",
    author : "Paulo Co eho",
    year: 1988,

    getInfo : function(){
        return this.title + " was written by " + this.author;
    }
}
console.log(book.getInfo());

/*
Output:

The Alchemist was written by Paulo Co eho
*/
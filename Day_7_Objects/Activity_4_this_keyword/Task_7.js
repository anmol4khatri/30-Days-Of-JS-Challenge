let book = {
    title: "The Alchemist",
    author : "Paulo Co eho",
    year: 1988,

    getInfo : function(){
        return this.title + " was written in " + this.year;
    }
}
console.log(book.getInfo());

/*
Output:

The Alchemist was written in 1988
*/
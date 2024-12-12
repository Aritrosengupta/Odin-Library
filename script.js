const MyLibrary=[];

function Book(Name,Author,Pages,Status){
    this.Name=Name;
    this.Author=Author;
    this.Pages=Pages;
    this.Status=Status;

    this.info=function(){
        console.log(`${this.Name} is written by ${this.Author} and has ${this.pages} pages`)
    }
}

function addBookToLibrary(obj){
    MyLibrary.push(obj);
}
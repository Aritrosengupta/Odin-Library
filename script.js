const MyLibrary=[
    {Name:'Aritro',Author:'JRR',Pages:250,Read:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Read:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Read:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Read:'No'}
];

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

const cardContainer=document.querySelector('.card-container');

MyLibrary.forEach(book=>{
    const NewCard=document.createElement('div');
    NewCard.className='card';
    const newName=document.createElement('h1');
    newName.textContent=book.Name;
    NewCard.appendChild(newName);

    cardContainer.appendChild(NewCard);
});
const MyLibrary=[
    {Name:'Aritro',Author:'JRR',Pages:250,Status:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Status:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Status:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Status:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Status:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Status:'No'},
    {Name:'Aritro',Author:'JRR',Pages:250,Status:'No'},{Name:'Aritro',Author:'JRR',Pages:250,Status:'No'}
,{Name:'Aritro',Author:'JRR',Pages:250,Status:'No'}
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

    const newAuthor=document.createElement('h2');
    newAuthor.textContent=book.Author;
    NewCard.appendChild(newAuthor);

    const NumberOfPages=document.createElement('div');
    NumberOfPages.textContent=book.Pages;
    NewCard.appendChild(NumberOfPages)

    const ReadOrNot=document.createElement('div');
    ReadOrNot.textContent=book.Status;
    NewCard.appendChild(ReadOrNot);

    cardContainer.appendChild(NewCard);
});

//Dialog

const Dialog=document.querySelector('dialog');
const showButton=document.querySelector('#add')
const closeButton=document.querySelector("#close");

showButton.addEventListener('click',()=>{
    Dialog.showModal();
})

closeButton.addEventListener('click',()=>{
    Dialog.close();
})



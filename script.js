const MyLibrary=[
   
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



//Submit

const Submit=document.querySelector('#submit');

Submit.addEventListener('click',(event)=>{
    event.preventDefault();
    const Title=document.querySelector('#Title');
    const TitleName=Title.value;
    Title.value='';
    
    const Author=document.querySelector('#Author');
    const AuthorName=Author.value;
    Author.value='';
    const Pages=200;
    const read='read';

    const AddBook=new Book(TitleName,AuthorName,Pages,read);
    addBookToLibrary(AddBook);
   
  
    ToDisplay();
    Dialog.close();
})



const cardContainer=document.querySelector('.card-container');






function ToDisplay(){
    cardContainer.innerHTML='';
MyLibrary.forEach(bookItem=>{
    

    const NewCard=document.createElement('div');
    NewCard.className='card';
    const newName=document.createElement('h1');
    newName.textContent=bookItem.Name;
    NewCard.appendChild(newName);

    const newAuthor=document.createElement('h2');
    newAuthor.textContent=bookItem.Author;
    NewCard.appendChild(newAuthor);

    const NumberOfPages=document.createElement('div');
    NumberOfPages.textContent=bookItem.Pages;
    NewCard.appendChild(NumberOfPages)

    const ReadOrNot=document.createElement('div');
    ReadOrNot.textContent=bookItem.Status;
    NewCard.appendChild(ReadOrNot);

    cardContainer.appendChild(NewCard);
});
}

// const haha=new Book('ari','niga',666,'read');
// addBookToLibrary(haha);



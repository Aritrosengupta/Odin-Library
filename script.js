const MyLibrary=[
   
];

function Book(Name,Author,Pages,Status){
    this.Name=Name;
    this.Author=Author;
    this.Pages=Pages;
    this.Status=Status;

    // this.info=function(){
    //     console.log(`${this.Name} is written by ${this.Author} and has ${this.pages} pages`)
    // }
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
    const Pages=document.querySelector('#Pages');
    const NumberOfPages=Pages.value;
    Pages.value='';

    const read=document.querySelector('#Read');
    const ReadOrNot=read.checked?'Yes':'No';
   
    

    const AddBook=new Book(TitleName,AuthorName,NumberOfPages,ReadOrNot);
    addBookToLibrary(AddBook);
   
  
    ToDisplay();
    Dialog.close();
})



const cardContainer=document.querySelector('.card-container');






function ToDisplay(){
    cardContainer.innerHTML='';
MyLibrary.forEach((bookItem,index)=>{
    
    //creating the div elements left and right
    const left=document.createElement('div');
    const right=document.createElement('div');
    left.className='left';
    right.className='right';
    //Create new elements using obj


    const NewCard=document.createElement('div');
    NewCard.className='card';
    NewCard.setAttribute('data-index',index);
    
    const newName=document.createElement('h1');
    newName.textContent=`Title:- ${bookItem.Name}`;
   NewCard.appendChild(newName);
    

    const newAuthor=document.createElement('h3');
    newAuthor.textContent=`Author: ${bookItem.Author}`;
    NewCard.appendChild(newAuthor);
  

    const NumberOfPages=document.createElement('div');
    NumberOfPages.textContent=`Pages: ${bookItem.Pages}`;
    NewCard.appendChild(NumberOfPages);

   
    const ReadOrNot=document.createElement('input');
    ReadOrNot.type='checkbox';
    ReadOrNot.checked=false
    ReadOrNot.id='MyCheckbox';
    const label=document.createElement('label');
    label.htmlFor='MyCheckbox';
    label.textContent='Read';
    if(bookItem.Status==='Yes'){
        ReadOrNot.checked=true;
    }else{
        ReadOrNot.checked=false;
    }

  ReadOrNot.addEventListener('change',(event)=>{
    bookIndex=event.target.closest('.card').getAttribute('data-index');
    MyLibrary[bookIndex].Status=ReadOrNot.checked ? 'yes':'No';
  })
  
    NewCard.appendChild(label);
    NewCard.appendChild(ReadOrNot);

    const DeleteButton=document.createElement('button');
    DeleteButton.textContent='Delete';
    DeleteButton.addEventListener('click',()=>{

        NewCard.remove();
        MyLibrary.splice(index,1);
    })
    NewCard.appendChild(DeleteButton);

    cardContainer.appendChild(NewCard);
});

}


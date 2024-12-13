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

    //check if form is valid
    const form=document.querySelector('#book-form');
    if(!form.checkValidity()){
        event.preventDefault();
        alert('please fill in all the required roles');
    }else{

    event.preventDefault();
    const Title=document.querySelector('#Title');
    const TitleName=Title.value;
  
    
    const Author=document.querySelector('#Author');
    const AuthorName=Author.value;
  
    const Pages=document.querySelector('#Pages');
    const NumberOfPages=Pages.value;
   

    const read=document.querySelector('#Read');
    const ReadOrNot=read.checked?'Yes':'No';
   
    

    const AddBook=new Book(TitleName,AuthorName,NumberOfPages,ReadOrNot);
    addBookToLibrary(AddBook);
   form.reset();
  
    ToDisplay();
    Dialog.close();
    }
})



const cardContainer=document.querySelector('.card-container');






function ToDisplay(){
    cardContainer.innerHTML='';
MyLibrary.forEach((bookItem,index)=>{
    
    //creating the div elements 
    const inputcheck=document.createElement('div');
    inputcheck.classList='inputtext';

    
    const cardBody=document.createElement('div');
    cardBody.classList='card-body';
    const cardButton=document.createElement('div');
    cardButton.classList='card-button';
     //Read Button
     const ReadButton=document.createElement('button');
    //Create new elements using obj


    const NewCard=document.createElement('div');
    NewCard.className='card';
    NewCard.setAttribute('data-index',index);
    
    const newName=document.createElement('h1');
    newName.textContent=`Title:- ${bookItem.Name}`;
    newName.id='title';
   NewCard.appendChild(newName);
    

    const newAuthor=document.createElement('h3');
    newAuthor.textContent=`Author: ${bookItem.Author}`;
    cardBody.appendChild(newAuthor)
    
  

    const NumberOfPages=document.createElement('div');
    NumberOfPages.textContent=`Pages: ${bookItem.Pages}`;
    cardBody.appendChild(NumberOfPages);
   

   
    const ReadOrNot=document.createElement('input');
    ReadOrNot.type='checkbox';
    ReadOrNot.checked=false
    ReadOrNot.id='MyCheckbox';
    const label=document.createElement('label');
    label.htmlFor='MyCheckbox';
    label.textContent='Read:';
    if(bookItem.Status==='Yes'){
        ReadOrNot.checked=true;
        ReadButton.textContent='Read';
        ReadButton.style.backgroundColor='green';
    }else{
        ReadOrNot.checked=false;
        ReadButton.style.backgroundColor='red';
        ReadButton.textContent='Not Read';
    }

  ReadOrNot.addEventListener('change',(event)=>{
    const bookIndex=event.target.closest('.card').getAttribute('data-index');
    MyLibrary[bookIndex].Status=ReadOrNot.checked ? 'Yes':'No';
    ReadButton.style.backgroundColor=ReadOrNot.checked? 'green':'red';
  })
  
    inputcheck.appendChild(label);
    inputcheck.appendChild(ReadOrNot);
    cardBody.appendChild(inputcheck)
   

    const DeleteButton=document.createElement('button');
    DeleteButton.textContent='Delete';
    DeleteButton.addEventListener('click',()=>{

        NewCard.remove();
        MyLibrary.splice(index,1);
    })

    ReadButton.addEventListener('click',(event)=>{
        bookIndex=event.target.closest('.card').getAttribute('data-index');
        if(ReadButton.textContent=='Read'){
            MyLibrary[bookIndex].Status='no';
            ReadOrNot.checked=false;
            ReadButton.textContent='Not Read';
            ReadButton.style.backgroundColor='red';
        }else{
            MyLibrary[bookIndex].Status='Yes';
            ReadOrNot.checked=true;
            ReadButton.textContent='Read';
            ReadButton.style.backgroundColor='green';
        }
    })


   
   cardButton.appendChild(ReadButton);
   cardButton.appendChild(DeleteButton);
   cardBody.appendChild(cardButton);

    NewCard.appendChild(cardBody);

    cardContainer.appendChild(NewCard);
});

}


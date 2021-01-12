// LO3 - UC3 
// Events

var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e){
    console.log(e.target);
})

var btns = document.querySelectorAll('#book-list .delete');
Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;

        li.parentNode.removeChild(li);
    });
})

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Watch Videos ', e.target.textContent, 'to learn');
})

//Event Bubbling

const list = document.querySelector('#book-list ul');

// Delete

list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//Interacting with Forms
//Creating Elements
//Styles & Classes
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;
    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})


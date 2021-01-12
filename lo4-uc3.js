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
    
    //hide books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            list.style.display  = "none";
        } else {
            list.style.display = "initial";
        }
    })
});

// Events //
var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){

    btn.addEventListener('click', function(e){

        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
        
    });
});
    // prevent default behaviour
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('navigation to', e.target.textContent, 'was prevented');
});

    // Event Bubbling

const list = document.querySelector('#book-list ul');

    // Delete books
list.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
    }
});

    // Add books
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // Create Elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add content
    bookName.textContent = value;
    deleteBtn.textContent = 'delete';


    // add classes

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to document

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);


});

    // Checkboxes & Change Events//

    // Hide Books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if (hideBox.checked){
        list.style.display = "none";
    } else{
        list.style.display = "initial";
    }
});

    // filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

//Attributes 
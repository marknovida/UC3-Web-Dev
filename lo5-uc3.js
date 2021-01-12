document.addEventListener('DOMContentLoaded', function(){

    // Event Bubbling
    
    const list = document.querySelector('#book-list ul');
    const forms = document.forms;
    
        // Delete books
    list.addEventListener('click', function(e){
        if (e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
        }
    });
    
        // Add books
    const addForm = forms['add-book'];
    addForm.addEventListener('submit', function(e){
        e.preventDefault();
        
    
        // Create Elements
        const value = addForm.querySelector('input[type="text"]').value;
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
    
        // Tabbed Contents
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
      if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach((panel) => {
          if(panel == targetPanel){
            panel.classList.add('active');
          }else{
            panel.classList.remove('active');
          }
        });
      }
    });
    
    })
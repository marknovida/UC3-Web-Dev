//Get Element By ID

console.log(document);

var banner = document.getElementById('page-banner');
var booklist = document.getElementById('book-list');

// Get Elements By Class or Tag

console.log(document.getElementsByClassName('page-banner'));
var titles = document.getElementById('titles');
    titles[0];
    titles[1];
    
    var lis = document.getElementsByTagName('li');
    lis[0];
    lis[1];

    titles

    for(i=0; i < titles.lenght; i++){
        console.log(titles[i]);
    }
    var titles = document.getElementById('titles');
    Array.from(titles).forEach(function(item){
        console.log(item);
    })
    
    // The Query Selector

    const wmf = document.querySelector('#book-list li:nth-child(2) .name');
    console.log(wmf);

    var books = document.querySelector('#book-list li .name');
    books = document.querySelectorAll('#book-list li .name');
    console.log(books);
    
    Array.from(books).forEach(function(books){
        console.log(book);
    });






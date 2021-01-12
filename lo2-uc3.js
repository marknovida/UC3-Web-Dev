// LO2 - UC3
//  Changing Text & HTML Content

var books = document.querySelector('#book-list li .name');

Array.from(books).forEach(function(books){
book.textContent += '(book title)';
});
const bookList = document.querySelector('#book-list');
    bookList.innerHTML = '<h2> Books And More Books..</h2>';
    bookList.innerHTML += '<p>This is how you add HTML</p>';

//  Nodes JS

const banner = document.querySelector('#page-banner');
    console.log('#page-banner node type is:', banner.nodeType);
    console.log('#page-banner node Name is:', banner.nodeName);
    console.log('#page-banner node ChildNodes is:', banner.has.ChildNodes());

const cloneBanner = banner.cloneNode(true);
console.log(cloneBanner);

// Traversing the DOM 

const  bookList = document.querySelector('#book-list');
console.log('The Parent Node is:', bookList.parentNode );
console.log('The Parent Element is:', bookList.parentElement);
console.log(bookList.childNodes);

console.log('book list next sibling is:', bookList.nextSibling );
console.log('book list next element sibling is:', bookList.nextElementSibling );

console.log('book list previous sibling is:', bookList.previousSibling );
console.log('book list previous element sibling is:', bookList.previousElementSibling );

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Helloooo World.......';

//construtor
function Library() {
  this.bookShelf = new Array();
};

//method
Library.prototype.addBook = function(book){};
Library.prototype.removeBookByTitle = function(title){};


//Will create the instance of our library
document.addEventListener("DOMContentLoaded", function(e){
  //will access all the libaray methods
  window.gLibrary = new Library();
});

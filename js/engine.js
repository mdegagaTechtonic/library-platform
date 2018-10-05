/**
 * @file The Library class that stores a collection of books
 * @author Merry Degaga
 * @version 10.4.2018
 */

/*
* Constructor creates a library
*/
//more appropriate for unique things/values for each object
(function() {//SINGLETON
  var instance;
  //console.log(instance);
  Library = function() {
    if (instance) { //if a instance of library already exists this will point the newly made library to the Singleton instance
      //console.log('already made an instance');
      return instance;
    }
    //console.log('new instance made');
    this.bookShelf = [];
    instance = this; //if a instance of library does not yet exist this will get and set the instance name for the new library
  }
})();

//method
//Global things for all objects; avoids repetition, saves memory
/**
* Adds a book to the library
* @param {Book} book
* @return {boolean} true if it was added in or false (because it is already in the library)
*/
Library.prototype.addBook = function(book) {
  //if book is in the bookShelf, will be returned in an array and check its length
  var foundBook = this.bookShelf.filter(function filterByTitle(ele) {
    return ele.title === book.title;
  });
  //if book wasn't found in the library
  if(foundBook.length === 0) {
    this.bookShelf.push(book);
    return true;
  }
  else {
    return false;
  }
};

/**
* Removes a book by its title from the library
* @param {String} title
* @return {boolean} true if it was removed or false (because it is not in the library)
*/
Library.prototype.removeBookByTitle = function(title) {
  //gets a book from the library
  //check param is not null ***
  //case - insensitive /trim
  for(var i = 0; i < this.bookShelf.length; i++) {
    //if the same title, remove book
    if(this.bookShelf[i].title.toLowerCase() === title.toLowerCase().trim()) {
      this.bookShelf.splice(i,1); //i is the index to start changing the array, 1 is the number of array elements to remove
      return true;
    }
  }
  return false;
};

/**
* Removes all books by the author's name from the library
* @param {String} authorName
* @return {boolean} true if they were removed or false (because they are not in the library)
*/
Library.prototype.removeBookByAuthor = function(authorName) {
  //check if param is null / empty string
  var newBookShelf = this.bookShelf.filter(function keepAuthors(ele){
    return ele.author.toLowerCase() !== authorName.trim().toLowerCase();
  });
  //author we are searching for is not in the new bookshelf
  if(newBookShelf.length < this.bookShelf.length) {
    this.bookShelf = newBookShelf;
    return true;
  }
  else {
    return false; //author not in the library because the length stayed the same
  }
};

/**
* Return a random book from the library
* @return {Book} or null if there are no books in the library
*/
Library.prototype.getRandomBook = function() {
  //Math.random returns a number between 0 and 1 (not inclusive)
  //Math.floor rounds the number down
  //gets an index between 0 and length-1
  if(this.bookShelf.length === 0) {
    return null;
  }
  else {
    var randIndex = Math.floor(Math.random()*this.bookShelf.length);
    return this.bookShelf[randIndex];
  }
};

/**
* Returns all books that completely and partially match the title
* @param {String} title
* @return {Array} of book Objects that match and partially match the title or an empty array
*/
Library.prototype.getBookByTitle = function(title) {
  //checks that the param exists
  if (title) {
    var regex = new RegExp(title.trim(), 'i');
  }
  //will get an array of books that contain that title
  //map to a new array of titles
  var bookByTitle = this.bookShelf.filter(function matchingTitles(ele) {
    return ele.title.match(regex) !== null;
  });
  return bookByTitle;
};

/**
* Returns all books that match and partially match the author's name
* @param {String} authorName
* @return {Array} of books Objects that match and partially match the author name or an empty array
*/
Library.prototype.getBookByAuthor = function(authorName) {
  //checks that the param exists
  if (authorName) {
    var regex = new RegExp(authorName.trim(), 'i');
  }
  //will get an array of books that contain that title
  var bookByAuthor = this.bookShelf.filter(function matchingAuthors(ele) {
    return ele.author.match(regex) !== null;
  });
  return bookByAuthor;
};

/**
* Adds a collection of books to the library
* @param {Array} books
* @return {number} of books added in or zero if no books were added in
*/
Library.prototype.addBooks = function(books) {
  //get the length before books are added in
  var lengthBefore = this.bookShelf.length;
  //go through the array of books and call addBook
  books.forEach(function addListOfBooks(ele) {
    gLibrary.addBook(ele);
  });
  return (this.bookShelf.length - lengthBefore); //will be zero if no books were added in
};

/**
* Returns the distinct authors' names from all books in the library
* @return {Array} of Strings of the names of all distinct authors or an empty array if no books exist
*/
Library.prototype.getAuthors = function() {
  //another way to do this....
  var authors = [];
  if(this.bookShelf.length === 0) {
    return authors; //we have no books in the library
  }
  else {
    //get all the authors in your library
    authors = this.bookShelf.map(function getAuthor(ele) {
      return ele.author;
    });
    //remove repeats
    for(var i = 0; i < authors.length; i++) {
      for(var j = i+1; j < authors.length; j++) {
        if(authors[j] === authors[i]) { //repeat was found
          authors.splice(j,1); //remove it
        }
      }
    }
    return authors;
  }
};

/**
* Returns a random author name from the library
* @return {String} author name or null if no books exist
*/
Library.prototype.getRandomAuthorName = function() {
  //check when library is empty that it returns null
  if(this.bookShelf.length === 0) {
    return null;
  }
  else {
    var randIndex = Math.floor(Math.random()*this.bookShelf.length);
    return this.bookShelf[randIndex].author;
  }
};

// /**
// * Returns a list of books based on any number of inputs
// * @return {Array} of books name or an empty array if no books exist
// */
// Library.prototype.find = function(title, author, numPages, pubDate) {
//   var found = [];
//   if(title) {
//     found = found.concat(this.getBookByTitle(title));
//   }
//   if(author) {
//     found = found.concat(this.getBookByAuthor(author));
//   }
//   if(numPages) {
//     found = found.concat(this.bookShelf.filter(book => book.numPages === numPages));
//   }
//   if(pubDate) {
//     found = found.concat(this.bookShelf.filter(book => book.pubDate.getFullYear() === pubDate));
//   }
//   return found;
// }


//what does DOMContentLoaded initiate?
//Will create the instance of our library
document.addEventListener("DOMContentLoaded", function(e){
  //will access all the libaray methods
  //console.log(window.gLibrary);
  //window.gLibrary;
  //console.log(window.gLibrary);
  //window.Library = null;
  window.gLibrary = new Library();
  window.lib = new Library();

  //another instance
  //window.gDenverLibrary = new Library();
  //need to handle empty case
  //gLibrary.addBook({});

  //empty test
  // console.log("Test methods on an empty library");
  // console.log(gLibrary.removeBookByTitle("wawa"));
  // console.log(gLibrary.removeBookByAuthor("W.B"));
  // console.log(gLibrary.getRandomBook());
  // console.log(gLibrary.getBookByTitle());
  // console.log(gLibrary.getBookByAuthor('d'))
  // console.log(gLibrary.addBooks([]));
  // console.log(gLibrary.getAuthors());
  // console.log(gLibrary.getRandomAuthorName());
  // console.log(gLibrary.find('name','key',29,444))

  //console.log("Test addBook method");
  // var book1 = new Book("Waterfall", "W.B", 20, 2018);
  // var book2 = new Book("HummingBirds", "W.B", 20, 2018);
  // var book3 = new Book("NiteSky", "Bay", 20, 2018);
  // var book4 = new Book("Nite", "B", 20, 2018);
  // console.log(gLibrary.addBook(book1));
  // console.log(gLibrary.addBook(book2));
  // console.log(gLibrary.addBook(book3));
  // console.log(gLibrary.addBook(book4));
  // console.log("Test adding a same book");
  // var same = new Book("Nite", "B", 20, 2018);
  // console.log(gLibrary.addBook(same));

  // console.log("Test edit book");
  // var book5 = new Book("NiteTime", "B", 20, 2018);
  // var book6 = new Book("Pie Recipes", "G", 20, 2018);
  // console.log(gLibrary.bookShelf[0].editBook(book6));
  // console.log(gLibrary.bookShelf[0].editBook(book5));

  // console.log("Test getRandomAuthorName");
  // console.log(gLibrary.getRandomAuthorName());
  // console.log(gLibrary.getRandomAuthorName());
  // console.log(gLibrary.getRandomAuthorName());

  // console.log("Test getAuthors");
  // console.log(gLibrary.getAuthors());

  // console.log("Test addBooks");
  // var arr = [book5, book6];
  // console.log("Test adding the same array of books");
  // console.log(gLibrary.addBooks(arr));
  // console.log(gLibrary.addBooks(arr));

  // console.log("Testing adding a single unique book from array");
  // var book8 = new Book("PieNite", "G", 20, 2018);
  // arr = [book5, book8];
  // console.log(gLibrary.addBooks(arr));

  // console.log("Test removeBookByAuthor");
  // console.log(gLibrary.removeBookByAuthor("k"));
  // console.log(gLibrary.removeBookByAuthor("bay"));
  // console.log(gLibrary.removeBookByAuthor("W.B"));

  // console.log("Test getRandomBook");
  // console.log(gLibrary.getRandomBook());
  // console.log(gLibrary.getRandomBook());
  // console.log(gLibrary.getRandomBook());

  // console.log("Test getBookByTitle");
  // console.log(gLibrary.getBookByTitle("ka"));
  // console.log(gLibrary.getBookByTitle('bb'));
  // console.log(gLibrary.getBookByTitle('nite '));

  // console.log("Test getBookByAuthor");
  // console.log(gLibrary.getBookByAuthor('k'));
  // console.log(gLibrary.getBookByAuthor("W.B"));
  // console.log(gLibrary.getBookByAuthor("b "));

  // console.log("Test removeBookByTitle");
  // console.log(gLibrary.removeBookByTitle("k"));
  // console.log(gLibrary.removeBookByTitle("Waterfall"));

  // console.log("Test getAuthors");
  // console.log(gLibrary.getAuthors());

  // console.log("Test getRandomAuthorName");
  //console.log(gLibrary.getRandomAuthorName());



  // console.log("Test find");
  // console.log(gLibrary.find('waterfall'));
  // console.log(gLibrary.find('waterfall ', 'bay'));
  // console.log(gLibrary.find('waterfall ', "bay", 89));
  // console.log(gLibrary.find('waterfall ', "bay", 89, 2018)); ****




//   //Check for webstorage support
//   if (typeof(Storage) !== "undefined") {
//     // Code for localStorage/sessionStorage.
//     //window.localStorage.setItem('lastname', 'Degaga');
//     window.localStorage.setItem('library', JSON.stringify(gLibrary.bookShelf));
//     var book7 = new Book("Pie", "G", 20, 2018);
//     gLibrary.bookShelf = JSON.parse(localStorage.getItem("library"));
//     //console.log(obj);
//     //console.log(JSON.parse(localStorage.getItem("library")).addBook(book7));
//     console.log(gLibrary.addBook(book7));
//     window.localStorage.setItem('library',JSON.stringify(gLibrary.bookShelf));
//     document.getElementById("result").innerHTML = localStorage.getItem("library");
//
//     //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
//
// } else {
//     // Sorry! No Web Storage support..
//     console.log("Web storage is not supported in this browser");
// }
});



// //testing
// //create a simple generic animal object - the basic values/methods any animal should have
// var genericAnimal = Object.create(null);
//
// genericAnimal.name = "Animal";
// genericAnimal.gender = "male";
// genericAnimal.description = function() {
//   return 'Gender: ' + this.gender + '; Name: ' + this.name;
// };
//
// //created another genericAnimal but placed its value in cat
// var cat = Object.create(genericAnimal);
// console.log(cat.description());
// console.log(genericAnimal.description());
//
// //cat is not so generic anymore because we include a purr method
// cat.purr = function () {
//   return 'purr';
// };
//
// console.log(cat.purr()); //this works
// //console.log(genericAnimal.purr()); //this won't work
//
// //make more cats!!!
// var pebbles = Object.create(cat);
// var jack = Object.create(cat);
// console.log(pebbles.description()); //pebbles has inherited from both the genericAnimal and cat objects
// console.log(pebbles.purr());
//
// //can adjust properites so they are not as generic
// console.log(jack.name); //generic
// jack.name = 'jack';
// console.log(jack.name) //that's better
// console.log(jack.description());
//
// //for people with a class based programming background, the new keyword was introduced
// function Tree(name) {
//   this.name = name;
//   this.sayName = function () {
//     return "I am " + this.name;
//   }
// }
//
// var spruce = new Tree('spruce');
// console.log(spruce.sayName());
//
//
// function Dog(){
//     this.pupper = 'Pupper';
// };
//
// Dog.prototype.pupperino = 'Pups.';
// var maddie = new Dog();
// var buddy = Object.create(Dog.prototype);
//
// //Using Object.create()
// console.log(buddy.pupper); //Output is undefined
// console.log(buddy.pupperino); //Output is Pups.
//
// //Using New Keyword
// console.log(maddie.pupper); //Output is Pupper
// console.log(maddie.pupperino); //Output is Pups.
//
// console.log(buddy.prototype);
//
// console.log(Tree.prototype);
// console.log(cat.prototype);



// function myObjectConst(what){
//     this.iAm = what;
//     this.whatAmI = function(){
//         console.log('I am ' + this.iAm);
//     };
// };
//
// var myObjectLit = {
//     iAm : 'an object',
//     whatAmI : function(){
//         console.log('I am ' + this.iAm);
//     }
// };
//
// // To use a literally notated object, you simply use it by referencing
// //its variable name, so wherever it is required you call it by typing;
// myObjectLit.whatAmI();
//
// // With constructor functions you need to instantiate
// //(create a new instance of) the object first; you do this by typing;
// var myNewObjectOne = new myObjectConst('an object named myNewObjectOne');
// myNewObjectOne.whatAmI();
//
// var myNewObjectTwo = new myObjectConst('an object named myNewObjectTwo');
// myNewObjectTwo.whatAmI();
//
//
// myObjectConst.iAm = 'name';
// console.log(myObjectConst.iAm);
// console.log(myObjectLit.iAm);

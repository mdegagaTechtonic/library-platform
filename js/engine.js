/**
 * @file The Library class that stores a collection of books
 * @author Merry Degaga
 * @version 10.3.2018
 */

/*
* Constructor creates a library
*/
//more appropriate for unique things/values for each object
function Library() {
  this.bookShelf = new Array();
};

//method
//Global things for all objects; avoids repetition, saves memory

//Library.prototype.checkedOut = true; //testing
//var book = new Library(); //testing
//console.log(book.checkedOut); ///testing

/**
* Adds a book to the library
* @param {Book} book
* @return {boolean} true if it was added in or false (because it is already in the library)
*/
Library.prototype.addBook = function(book) {};

/**
* Removes a book by its title from the library
* @param {String} title
* @return {boolean} true if it was removed or false (because it is not in the library)
*/
Library.prototype.removeBookByTitle = function(title) {};

/**
* Removes all books by the author's name from the library
* @param {String} authorName
* @return {boolean} true if they were removed or false (because they are not in the library)
*/
Library.prototype.removeBookByAuthor = function(authorName) {};

/**
* Return a random book from the library
* @return {Book} or null if there are no books in the library
*/
Library.prototype.getRandomBook = function() {};

/**
* Returns all books that completely and partially match the title
* @param {String} title
* @return {Array} of book Objects that match and partially match the title or an empty array if no books match or partially match
*/
Library.prototype.getBookByTitle = function(title) {};

/**
* Returns all books that match and partially match the author's name
* @param {String} authorName
* @return {Array} of books Objects that match and partially match the author name or an empty array if no books match or partially match
*/
Library.prototype.getBookByAuthor = function(authorName) {};

/**
* Adds a collection of books to the library
* @param {Array} books
* @return {number} of books added in or zero if no books were added in
*/
Library.prototype.addBooks = function(books) {};

/**
* Returns the distinct authors' names from all books in the library
* @return {Array} of Strings of the names of all distinct authors or an empty array if not books exist or if no authors exist
*/
Library.prototype.getAuthors = function() {};

/**
* Returns a random author name from the library
* @return {String} author name or null if no books exist or null if no books by that author
*/
Library.prototype.getRandomAuthorName = function() {};








//Will create the instance of our library
document.addEventListener("DOMContentLoaded", function(e){
  //will access all the libaray methods
  window.gLibrary = new Library();
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

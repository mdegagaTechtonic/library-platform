/**
 * @file The Book class
 * @author Merry Degaga
 * @version 10.3.2018
 */

/**
* Constructor will create a book from parameters
* @param {String} title
* @param {String} author
* @param {number} numPages is the number of pages
* @param {number} pubDate is the published date
*/
function Book(title, author, numPages, pubDate) {
  //Can error check to make sure all the fields were provided and they are not null
  this.title = title.trim();
  this.author = author.trim();
  this.numPages = numPages;
  this.pubDate = new Date().setFullYear(pubDate);
}

//methods
/**
* Takes an object that can have some or all of the fields {title,author,numPages} and edits the book using these fields
* @param {Object} book
* @return {Book} the edited book object
*/
Book.prototype.editBook = function(oBook){
  //how about undefined properties of oBook?
  if(oBook.title !== null) {
    this.title = oBook.title;
  }
  if(oBook.author !== null) {
    this.author = oBook.author;
  }
  if(oBook.numPages !== null) {
    this.numPages = oBook.numPages;
  }
  return this;
};


// //testing
// var j = new Book('ba', 'dan', 56, 1889);
// console.log(j);
//
// if(!j===undefined) {
//   console.log('true');
// }

/**
 * @file The Book class
 * @author Merry Degaga
 * @version 10.4.2018
 */

/**
* Constructor will create a book from parameters
* @param {String} title
* @param {String} author
* @param {number} numPages is the number of pages
* @param {number} pubDate is the published year
*/
function Book(title, author, numPages, pubDate) {
  this.title = title.trim();
  this.author = author.trim();
  this.numPages = numPages;
  this.pubDate = new Date();
  this.pubDate.setFullYear(pubDate);
}

//methods
/**
* Takes an object that can have some or all of the fields {title,author,numPages} and edits the book using these fields
* @param {Object} book
* @return {Book} the edited book object
*/
Book.prototype.editBook = function(oBook){
  //make sure the info is unique too
  //get the properities in the oBook
  var oBookProperties = oBook.entries();
  for(var i = 0; i < oBookProperties.length; i++) {
    if(this.indexOf(oBookProperties[i]) !== -1) {
      oBookProperties[i] = undefined; 
    }
  }

  this.title = oBook.title || this.title;

  this.author = oBook.author || this.author;

  this.numPages = oBook.numPages || this.numPages;

  return this;
};


// //testing
// var j = new Book('ba', 'dan', 56, 1889);
// console.log(j);
//
// if(!j===undefined) {
//   console.log('true');
// }

// date: 05-01-2024

//exercise on filter 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const historyBooks = books.filter( (book) => book.genre == "History")   // This will return the book objects which have history genre
//   const historyBooksTitle = books.filter( (book) => {
/*     if (book.genre == "History"){ 
        return book.title   }                       // this will not return the book title as arrays whose genre is history
  }) */

  console.log(historyBooks);
//   console.log(historyBooksTitle);

const recentBooks = books.filter( (book) => book.publish > 2000)
console.log(recentBooks);

// In simple words, if we use {} then return needed within it otherwise not

const recentHistoryBooks = books.filter( (book) => book.genre = "History" && book.publish > 1995)
console.log(recentHistoryBooks);

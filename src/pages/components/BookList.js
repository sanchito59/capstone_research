import React from 'react';
import './../../App.css';
// Components
import BookCard from './BookCard';
import OpenLibraryBookCard from './OpenLibraryBookCard';
import EmbeddedBook from './EmbeddedBook';

const BookList = (props) => {
  const { availableEbooks, books, openLibraryBooks } = props;
  // console.log('BookList props: ', props);
  return (
    <div>
      <div className='embedded-book-wrapper'>
        {
          availableEbooks.map((ebook, i) => {
            return <div><EmbeddedBook
              ebookURL={ebook.itemURL}
              key={i}
            /> <br></br></div>
          })
        }
      </div>
      <div className='book-list-wrapper'>
        {
          books.map((book, i) => {
            return <BookCard
              image={book.volumeInfo.imageLinks.thumbnail}
              previewLink={book.volumeInfo.previewLink}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              publisher={book.volumeInfo.publisher}
              publishedDate={book.volumeInfo.publishedDate}
              downloadLinkForDevices={book.accessInfo.epub.acsTokenLink}
              googleBookId={book.id}
              // Need error handling for 'TypeError: Cannot read property '0' of undefined' on some queries
              ISBN={book.volumeInfo.industryIdentifiers[0].identifier}
              key={i}
            />
          })
        }
        {
          openLibraryBooks.map((book, i) => {
            return <OpenLibraryBookCard
              coverIMG={'https://i.imgur.com/J5LVHEL.jpg'}
              title={book.title}
              author={book.author_name}
              publisher={book.publisher}
              // needs error handling/data management
              ISBN={book.isbn}
              publishedDate={book.publish_date}
              key={i}
            />
          })
        }
      </div>
    </div>
  )
}

export default BookList;
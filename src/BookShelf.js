import React, { Component } from 'react'
import Book from './Book.js'

class BookShelf extends Component {
  render() {
    const { books, shelf, changeShelf } = this.props

   /*  let showingBooks
    if (books.length === 0) {
      return null;
    } else {
      showingBooks = books.filter(book => book.shelf === shelf)
    } */

    return (
      <div
        className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(book => book.shelf === shelf)
              .map(book => (
              <Book
                book={book}
                shelf={shelf.id}
                changeShelf={changeShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
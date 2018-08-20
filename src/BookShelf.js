import React, { Component } from 'react'
import Book from './Book.js'

class BookShelf extends Component {
  render() {
    const { books, shelf, changeShelf } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(book => shelf.id === book.shelf)
              .map(book => (
                <Book
                  key={book.id}
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
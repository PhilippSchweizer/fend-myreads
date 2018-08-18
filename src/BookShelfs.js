import React, { Component } from 'react'
import Book from './Book.js'

class BookShelfs extends Component {
  render() {
    const { books, shelfs, changeShelf } = this.props

    return (
      <div className="list-books-content">
        {shelfs.map((shelf) => (
          <div
            key={shelf.id}
            id={shelf.id}
            className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <Book
                books={books}
                shelf={shelf.id}
                changeShelf={changeShelf}/>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default BookShelfs
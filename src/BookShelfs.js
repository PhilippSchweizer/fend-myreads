import React, { Component } from 'react'
import Book from './Book.js'

class BookShelfs extends Component {
  render() {
    return (
      <div className="list-books-content">
        {this.props.shelfs.map((shelf) => (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <Book />
              </ol>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default BookShelfs
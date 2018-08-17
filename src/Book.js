import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger.js'

class Book extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book, shelf) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.thumbnail})`
                  }}/>
                <BookShelfChanger />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}

export default Book
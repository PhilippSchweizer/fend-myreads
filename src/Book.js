import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger.js'

class Book extends Component {
  render() {
    const { book, shelf, changeShelf } = this.props
    
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
              }} />
            <BookShelfChanger
              book={book}
              shelf={shelf}
              changeShelf={changeShelf} />
          </div>
          <div className="book-title">{book.title}</div>
            {/* as suggested by project reviewer: use join method to handle multiple authors */}
          <div className="book-authors">{book && book.authors && Array.isArray(book.authors) && book.authors.join(" & ")}</div>
        </div>
      </li>
    )
  }
}

export default Book
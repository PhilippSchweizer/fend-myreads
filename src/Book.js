import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger.js'

class Book extends Component {
  render() {
    let showingBooks
		if (this.props.books.length === 0) {
			return null;
		} else {
			showingBooks = this.props.books
    }
    
    return (
      <ol className="books-grid">
        {showingBooks.filter(book => book.shelf === this.props.shelf.id (
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
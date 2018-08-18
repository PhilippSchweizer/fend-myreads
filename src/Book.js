import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger.js'

class Book extends Component {
  render() {
    const { books, shelf, changeShelf } = this.props
    
    let showingBooks
		if (books.length === 0) {
			return null;
		} else {
			showingBooks = books.filter(book => book.shelf === shelf)
    }

    return (
      <ol className="books-grid">
        {showingBooks.map(book => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                  }}/>
                <BookShelfChanger 
                  book={book}
                  shelf={shelf}
                  changeShelf={changeShelf}/>
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
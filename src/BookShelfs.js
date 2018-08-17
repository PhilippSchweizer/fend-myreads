import React, { Component } from 'react'
import Book from './Book.js'

class BookShelfs extends Component {
  render() {
    return (
      <div className="list-books-content">
        {this.props.shelfs.map((shelf) => (
          <div key={shelf.id} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <Book books={this.state.books}/>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default BookShelfs
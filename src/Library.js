import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.js'
import BookShelf from './BookShelf.js'

class Library extends Component {
  render() {
    const { books, shelfs, changeShelf } = this.props

    return (
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          {shelfs.map((shelf) => (
            <BookShelf
              key={shelf.id}
              books={books}
              shelf={shelf}
              changeShelf={changeShelf} />
          ))}
        </div>
        <div className='open-search'>
          <Link
            to='/search-book'
          >Add a Book</Link>
        </div>
      </div>
    )
  }
}

export default Library
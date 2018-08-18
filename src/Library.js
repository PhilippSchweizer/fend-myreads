import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.js'
import BookShelfs from './BookShelfs.js'

class Library extends Component {
  render() {
    const {books, shelfs, changeShelf} = this.props

    return (
      <div className="list-books">
        <Header />
        <BookShelfs
          books={books}
          shelfs={shelfs}
          changeShelf={changeShelf} />
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
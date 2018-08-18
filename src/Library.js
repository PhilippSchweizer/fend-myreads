import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.js'
import BookShelfs from './BookShelfs.js'

class Library extends Component {
  render() {
    console.log(this.props.shelfs)
    return (
      <div className="list-books">
        <Header />
        <BookShelfs
          books={this.props.books}
          shelfs={this.props.shelfs} />
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
import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfs from './BookShelfs'

const shelfs = [
  {'name': 'Currently Reading', 'id': 'currentlyReading'},
  {'name': 'Want to Read', 'id': 'wantToRead'},
  {'name': 'Read', 'id': 'read'}
]

class BooksApp extends Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <BookShelfs shelfs={shelfs}/>
          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
        )}
      </div>
    )
  }
}

export default BooksApp

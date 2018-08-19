import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Library from './Library.js'
import SearchPage from './SearchPage.js'
import * as BooksAPI from './BooksAPI.js'
import './App.css'

const shelfs = [
  { 'name': 'Currently Reading', 'id': 'currentlyReading' },
  { 'name': 'Want to Read', 'id': 'wantToRead' },
  { 'name': 'Read', 'id': 'read' }
]

class BooksApp extends Component {
  state = {
    books: []
  }

  updateBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.updateBooks()   
  }

  componentDidMount() {
    this.updateBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library
            books={this.state.books}
            shelfs={shelfs}
            changeShelf={this.changeShelf} />
        )} />
        <Route path='/search-book' render={() => (
          <SearchPage 
            changeShelf={this.changeShelf}/>
        )} />
      </div>
    )
  }
}

export default BooksApp

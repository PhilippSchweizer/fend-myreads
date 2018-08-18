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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Library 
            books={this.state.books}
            shelfs={shelfs}/>
        )} />
        <Route path='/search-book' render={() => (
          <SearchPage />
        )} />
      </div>
    )
  }
}

export default BooksApp

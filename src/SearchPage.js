import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import Book from './Book.js'
// Did some research on debouncing as suggested by my project reviewer
// I found this nice npm package which makes implementing the debounce fairly easy
import { DebounceInput } from 'react-debounce-input'

class SearchPage extends Component {
  state = {
    query: '',
    bookSearch: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateBooks(query)
  }

  updateBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then(
        (bookSearch) => {
          if (bookSearch.error) {
            this.setState({ bookSearch: [] })
          } else {
            this.setState({ bookSearch })
          }
        }
      )
    } else {
      this.setState({ bookSearch: [] })
    }
  }

  render() {
    const { bookSearch, query } = this.state
    const { books, changeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
          {/*
          * This input field proved to be very perfomance costly.
          * It suffices to trigger the function after the user stoped typing in the input field
          * So in order to limit the rate at which the function is fired, this debounce functionality
          * was implemented. It uses the 'react-debounce-input' package.
          */}
            <DebounceInput
              type="text"
              placeholder="Search by title or author"
              value={query}
              minLength={2}
              debounceTimeout={200}
              onChange={event => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {bookSearch.map(searchedBook => {
              let shelf = 'none'

              books.map(book => (
                book.id === searchedBook.id ? shelf = book.shelf : ''
              ))

              return (
                <Book
                  key={searchedBook.id}
                  book={searchedBook}
                  shelf={shelf}
                  changeShelf={changeShelf} />
              )
            }
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage

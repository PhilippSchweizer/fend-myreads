import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import Book from './Book.js';

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
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.bookSearch.map(searchedBook => {
              let shelf = 'none'

              this.props.books.map(book => (
                book.id === searchedBook.id ? shelf = book.shelf : ''
              ))

              return (
                <Book
                  key={searchedBook.id}
                  book={searchedBook}
                  shelf={shelf}
                  changeShelf={this.props.changeShelf} />
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

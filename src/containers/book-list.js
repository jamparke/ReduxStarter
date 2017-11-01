import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className='list-group-item'>{book.title}</li>
      )
    })
  }
  render () {
    return (
      <ul className='list-groupo col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  // whatever is returned will show up as props inside of the booklist
  return {
    books: state.books
  }
}

// anything returned from this function will end up as props on the booklist container
function mapDispatchToProps (dispatch) {
  // what ever select book is called, the result should be passed to all of our reducers
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch)
}
// promote booklist from a component to a container - it neds to know about this new dispatch method, select book. Makei t avaialbe as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)

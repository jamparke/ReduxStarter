import { combineReducers } from 'redux'
import BooksReducer from './reducers_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReducer,
  ActiveBook: ActiveBook
})

export default rootReducer

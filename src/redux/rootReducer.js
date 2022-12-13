import { combineReducers } from 'redux'
import todosReducer from './Todo/todosReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    products: productsReducer
})

export default rootReducer

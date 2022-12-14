import { combineReducers } from 'redux'
import todosReducer from './Todo/todosReducer'
import productsReducer from "./product/productsReducer";

const rootReducer = combineReducers({
    todos: todosReducer,
    products: productsReducer
})

export default rootReducer

import { combineReducers } from "redux";
import filtersReducer from '../redux/filters/reducer'
import todosReducer from '../redux/todos/reducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer;
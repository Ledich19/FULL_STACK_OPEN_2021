import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import {
  composeWithDevTools
} from 'redux-devtools-extension'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filtrReducer'
import chank from 'redux-thunk'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(chank)))

export default store
import {combineReducers} from 'redux';
import postReducer from './post_reducer'
import counterReducer from './counter_reducer'

const rootReducer = combineReducers({
    counter:counterReducer,
    post:postReducer
  })

export default rootReducer;
import {applyMiddleware, combineReducers, createStore} from 'redux'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'
import invoiceReducer from './reducers/invoiceReducer'
import modalReducer from './reducers/modalReducer'
import productReducer from './reducers/productReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    invoice: invoiceReducer,
    modal: modalReducer,
    product: productReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store
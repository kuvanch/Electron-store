import {applyMiddleware, combineReducers, createStore} from 'redux'
import authReducer from './reducers/authReducer'
import thunk from 'redux-thunk'
import invoiceReducer from './reducers/invoiceReducer'
import modalReducer from './reducers/modalReducer'
import productReducer from './reducers/productReducer'
import userReducer from './reducers/userReducer'
import salesReducer from './reducers/salesReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    invoice: invoiceReducer,
    modal: modalReducer,
    product: productReducer,
    user: userReducer,
    sales: salesReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store
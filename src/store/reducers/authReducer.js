const initialState = {
    isAuth: false,
    login: '',
    token: '',
    message: ''
}

const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,isAuth: true,login: action.payload.login, token: action.payload.token, message: 'Успешно'
            }
        case 'LOGIN_FAILURE':
            return {
                ...state,isAuth: false, message: action.payload.message
            }
        default:
            return state
    }
}

export default authReducer

export const authUser = (payload) => ({type: 'LOGIN_SUCCESS', payload})
export const failUser = (payload) =>({type: 'LOGIN_FAILURE', payload})
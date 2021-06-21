const initialState = {
    data: []
}

const userReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'USER_DATA':
            return {
                ...state,data:action.payload
            }
        default:
            return state
    }
}

export const userData = (payload) => ({type:'USER_DATA', payload})

export default userReducer

const initialState = {
    data: []
}

const salesReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case 'SALES_DATA':
            return {
                ...state, data: action.payload
            }
        default:
            return state
    }
}

export const salesData = (payload) => ({type: 'SALES_DATA', payload})

export default salesReducer
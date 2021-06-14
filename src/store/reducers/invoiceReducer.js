const initialState = {
    data: []
}

const invoiceReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'INVOICE_DATA':
            return {
                ...state,data: action.payload
            }            
        default:
            return state;
    }
}

export const invoiceData = (payload) => ({type: 'INVOICE_DATA',payload})

export default invoiceReducer

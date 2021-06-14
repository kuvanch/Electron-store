const initialState = {
    data: []
}

const productReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'INVOICE_PRODUCT':
            return {
                ...state,data: action.payload
            }            
        default:
            return state;
    }
}

export const invoiceProduct = (payload) => ({type: 'INVOICE_PRODUCT',payload})

export default productReducer

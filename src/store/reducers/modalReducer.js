const initialState = {
    isOpen: false,
    title: ''
}


const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MODAL_OPEN':
            return {
                ...state, isOpen: true,title: action.payload
            }
        case 'MODAL_CLOSE':
            return {
                ...state, isOpen: false, title: ''
            }            
        default:
            return state
    }
}

export default modalReducer

export const modalOpen = (payload) => ({type: 'MODAL_OPEN',payload})
export const modalClose = (payload) => ({type: 'MODAL_CLOSE',payload})

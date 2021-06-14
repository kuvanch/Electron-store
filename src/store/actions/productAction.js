import axios from "axios"
import {invoiceProduct} from '../reducers/productReducer'
const productAction = (link) => {
    return async dispatch => {
        await axios({
            method: 'get',
            url: 'http://localhost:8080/api/invoice-product',
            headers: {
                'Authorization': `token ${localStorage.getItem('token')}`
            }
        })
        .then(res => dispatch(invoiceProduct(res.data.data)))
        .catch( err => console.log(err))
    }
}

export default productAction
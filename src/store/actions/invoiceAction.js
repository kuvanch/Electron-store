import axios from "axios"
import {invoiceData} from '../reducers/invoiceReducer'
const invoiceAction = (link) => {
    return dispatch => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/api/incoming-invoice',
            headers: {
                'Authorization': `token ${localStorage.getItem('token')}`
            }
        })
        .then(res => dispatch(invoiceData(res.data.data)))
        .catch( err => console.log(err))
    }
}

export default invoiceAction
import axios from "axios"
import { salesData } from "../reducers/salesReducer"
import invoiceAction from './invoiceAction'
import productAction from './productAction'
const createAction = (data,link) => {
    return async dispatch => {
        await axios({
            method: 'post',
            url: `http://localhost:8080/api/${link}`,
            headers:{'Authorization': `token ${localStorage.getItem('token')}`},
            data: data
        }).then(res => {
            if(res.status === 201) {
                dispatch(productAction());
                dispatch(invoiceAction());
                dispatch(salesData())
            }
        })
    }
}

export default createAction
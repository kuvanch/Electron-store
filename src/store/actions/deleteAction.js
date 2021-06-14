import axios from 'axios'
import invoiceAction from './invoiceAction'
import productAction from './productAction'

const deleteAction = (link,id) => {
    return dispatch => {
        axios({
            method: 'delete',
            url: `http://localhost:8080/api/${link}/${id}`,
            headers:{'Authorization': `token ${localStorage.getItem('token')}`}
        })
        .then(res => {
            if(res.status === 200) {
                dispatch(invoiceAction())
                dispatch(productAction())
            }
        })
    }
}

export default deleteAction
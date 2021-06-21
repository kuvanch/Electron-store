import axios from "axios"
import {salesData} from '../reducers/salesReducer'
const salesAction = (link) => {
    return dispatch => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/api/sale',
            headers: {
                'Authorization': `token ${localStorage.getItem('token')}`
            }
        })
        .then(res => dispatch(salesData(res.data.data)))
        .catch( err => console.log(err))
    }
}

export default salesAction
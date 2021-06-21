import { userData } from "../reducers/userReducer"

const { default: axios } = require("axios")

const userAction = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/api/auth',
            headers:{'Authorization': `token ${localStorage.getItem('token')}`}
        })
        .then(res => dispatch(userData(res.data.data)))
    }
}

export default userAction
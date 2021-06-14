import axios from "axios"
const salesAction = (link) => {
    return dispatch => {
        axios({
            method: 'get',
            url: 'http://localhost:8080/api/sale',
            headers: {
                'Authorization': `token ${localStorage.getItem('token')}`
            }
        })
        .then(res => console.log(res.data))
        .catch( err => console.log(err))
    }
}

export default salesAction
import axios from "axios"

const createAction = (data,link) => {
    return async dispatch => {
        await axios({
            method: 'post',
            url: `http://localhost:8080/api/${link}`,
            headers:{'Authorization': `token ${localStorage.getItem('token')}`},
            data: data
        })
    }
}

export default createAction
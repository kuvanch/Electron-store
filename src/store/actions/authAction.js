import { authUser, failUser } from '../reducers/authReducer'
import axios from 'axios'
const authAction = (data) => {
    console.log(data);
    return async (dispatch) => {
        const resp = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/auth/login',
            data: data
        })
        .then(res =>{
             dispatch(authUser(res.data))
             localStorage.setItem('token',res.data.token)
        })
        .catch( res => dispatch(failUser(res.response.data)))
    }
}

export default authAction
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import authAction from '../store/actions/authAction'
function Login(){
	const initialState = {
		login: '',
		password: ''
	}
	const [form, setForm] = useState(initialState)
  const dispatch = useDispatch()
  const {message,isAuth} = useSelector(state => state.auth)
  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const onClickSign = (e) => {
    e.preventDefault()
    dispatch(authAction(form))
  }
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Smart</b>Store
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Вход в систему</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Login"
                  name='login'
                  onChange={onChange}
                  value={form.login}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  value={`${form.password}`}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={onChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  {message}
                </div>
                <div className="col-4">
                  <button onClick={onClickSign} type="submit" className="btn btn-primary btn-block">
                    Вход
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

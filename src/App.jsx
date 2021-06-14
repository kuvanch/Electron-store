import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter,Route } from "react-router-dom";
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Modal from './components/Modal/Modal';
import Login from './pages/Login'
import Invoice from './pages/Invoice'
import Product from './pages/Product';
import invoiceAction from './store/actions/invoiceAction';
import productAction from './store/actions/productAction';
import Home from './pages/Home';
const Hello = () => {
  return (
    <>
      <SideBar/>
      <Header/>
    </>
  )}
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(invoiceAction());
    dispatch(productAction());
  }, []);
  const {isAuth} = useSelector(state => state.auth)
  const app = <HashRouter>
                <Hello/>
                <div className="content-wrapper" style={{minHeight: "411.229px"}}>
                    <Route path="/" component={Home} exact/>
                    <Route path="/invoice" component={Invoice} exact/>
                    <Route path="/products" component={Product} exact/>
                </div>
              </HashRouter>
return isAuth ? app : <Login/>
}

export default App;
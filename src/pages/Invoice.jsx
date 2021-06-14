import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal/Modal';
import Tables from '../components/Tables/Tables';
import invoiceAction from '../store/actions/invoiceAction';
import createAction from '../store/actions/createAction';
import { modalClose } from '../store/reducers/modalReducer';
import deleteAction from '../store/actions/deleteAction'
const tableTitles = [
  '#',
  'Названия',
  'Фирма',
  'Количество',
  'Цена',
  'Сумма контракта',
  'Номер счета',
  'Дата',
];

function Invoice() {
  const initialState = {
    name: '',
    firm: '',
    count: 0,
    amount: 0,
    contractAmount: '',
    invoiceNumber: '',
    createdAt: new Date().getDate()   
  }
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.invoice);
  const { isOpen } = useSelector((state) => state.modal);

  const [form, setForm] = useState(initialState)
  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const onCreateInvoice = () => {
    dispatch(createAction(form,'incoming-invoice/add'))
    dispatch(invoiceAction());
    dispatch(modalClose())
    setForm(initialState)
  }

  const onDeleteInvoice = (id) => {
    dispatch(deleteAction('incoming-invoice/delete',id))
  }

  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Счет фактура</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item active">Счет</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Tables titles={tableTitles} titleModal="Счет фактура">
        {data.map((item, i) => {
          return (
            <tr key={item.createdAt}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.firm}</td>
              <td>{item.count}</td>
              <td>{item.amount}</td>
              <td>{item.contractAmount}</td>
              <td>{item.invoiceNumber}</td>
              <td>{item.createdAt}</td>
              <td className='d-flex'>
                <div className="btn-sm btn-primary ml-2">
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <div className="btn-sm btn-danger ml-2" onClick={() => onDeleteInvoice(item._id)}>
                  <i className="fas fa-trash"></i>
                </div>
              </td>
            </tr>
          );
        })}
      </Tables>
      {isOpen && (
        <Modal onCreate = {onCreateInvoice}>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Названия</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name='name'
                  onChange={onChange}
                  value={form.name}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Фирма</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name='firm'
                  onChange={onChange}
                  value={form.firm}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Количество</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name='count'
                  onChange={onChange}
                  value={form.count}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Цена</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name='amount'
                  onChange={onChange}
                  value={form.amount}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Сумма контракта</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name='contractAmount'
                  onChange={onChange}
                  value={form.contractAmount}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Номер счета</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name='invoiceNumber'
                  onChange={onChange}
                  value={form.invoiceNumber}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Invoice;

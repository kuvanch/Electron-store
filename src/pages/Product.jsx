import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal/Modal';
import Tables from '../components/Tables/Tables';
import createAction from '../store/actions/createAction';
import deleteAction from '../store/actions/deleteAction';
import productAction from '../store/actions/productAction';
import { modalClose } from '../store/reducers/modalReducer';

const tableTitles = [
  '#',
  'Названия',
  'Штрих-код',
  'Количество',
  'Цена',
  'Цена за единицу',
  'Дата',
];
function Product() {
  const initialState = {
    name: '',
    barcode: '',
    amount: 0,
    pricePerUnit: 0,
    unit: 0,
    createdAt: new Date().getDate(),
    incomingInvoiceId: '',
  };
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);
  const { isOpen } = useSelector((state) => state.modal);
  const dataInvoice = useSelector((state) => state.invoice.data);

  const [form, setForm] = useState(initialState);
  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const onCreateProduct = () => {
    dispatch(createAction(form, 'invoice-product/add'));
    dispatch(productAction());
    dispatch(modalClose());
    dispatch(productAction());
    setForm(initialState);
  };
   const onDeleteProduct = (id) => {
    dispatch(deleteAction('invoice-product/delete',id))
   }
  return (
    <>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Товары</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item active">Товары</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <Tables titles={tableTitles} titleModal="Товары">
        {data.map((item, i) => {
          return (
            <tr key={item.createdAt}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.barcode}</td>
              <td>{item.amount}</td>
              <td>{item.pricePerUnit}</td>
              <td>{item.unit}</td>
              <td>{item.createdAt}</td>
              <td className='d-flex'>
                <div className="btn-sm btn-primary ml-2">
                  <i className="fas fa-pencil-alt"></i>
                </div>
                <div className="btn-sm btn-danger ml-2" onClick={() => onDeleteProduct(item._id)}>
                  <i className="fas fa-trash"></i>
                </div>
              </td>
            </tr>
          );
        })}
      </Tables>
      {isOpen && (
        <Modal onCreate={onCreateProduct}>
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label>Названия</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name="name"
                  onChange={onChange}
                  value={form.name}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Штрих-код</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name="barcode"
                  onChange={onChange}
                  value={form.barcode}
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
                  name="amount"
                  onChange={onChange}
                  value={form.amount}
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
                  name="pricePerUnit"
                  onChange={onChange}
                  value={form.pricePerUnit}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Цена за единицу</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter ..."
                  name="unit"
                  onChange={onChange}
                  value={form.unit}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Select</label>
                <select name='incomingInvoiceId' onChange={onChange} className="form-control">
                  {
                      dataInvoice.map((item,i) => {
                          return <option key={item._id} value={item._id}>{item.name}</option>
                      })
                  }
                </select>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default Product;

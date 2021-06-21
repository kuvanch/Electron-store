import React, { useState } from 'react'
import Tables from '../components/Tables/Tables';
import Modal from '../components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '../store/reducers/modalReducer';
import createAction from '../store/actions/createAction';
const tableTitles = [
    '#',
    'Названия',
    'Количество',
    'Цена',
    'Общая сумма',
    'Дата',
  ];
const initialState = {
    productId: null,
    quantity: 0
}
function Sales() {
    const { isOpen } = useSelector((state) => state.modal);
    const { data: {products,sales} } = useSelector((state) => state.sales)
    const productData = useSelector((state) => state.product.data)
    console.log(products);
    const [form, setForm] = useState(initialState)
    const dispatch = useDispatch()
    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }
    const onSelectChange = (e) => {
        setForm({...form,productId: e.target.value})
    }
    const onCreateProduct = () => {
        dispatch(createAction(form, 'sale/add'));
        console.log(form);
        dispatch(modalClose());
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
                    <h1 className="m-0">Продажи</h1>
                    </div>
                    <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active">Продажи</li>
                    </ol>
                    </div>
                </div>
                </div>
            </div>
            <Tables titles={tableTitles} titleModal="Продажи">
                {sales.map((item, i) => {
                return (
                    <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>{products[i][0].name}</td>
                    <td>{item.quantity}</td>
                    <td>{products[i][0].pricePerUnit}</td>
                    <td>{item.totalAmount}</td>
                    <td>{item.updatedAt}</td>
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
                            <label>Select</label>
                            <select name='incomingInvoiceId' onChange={onSelectChange} className="form-control">
                            <option value="">Выберите товар</option>
                            {
                                productData.map((item,i) => {
                                    return <option key={item._id} value={item._id}>{item.name}</option>
                                })
                            }
                            </select>
                        </div>
                        </div>
                        <div className="col-sm-6">
                        <div className="form-group">
                            <label>Количество</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter ..."
                            name="quantity"
                            onChange={onChange}
                            value={form.name}
                            />
                        </div>
                        </div>
                    </div>
                </Modal>
            )}   
        </>
    )
}

export default Sales

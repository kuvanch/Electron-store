import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalClose } from '../../store/reducers/modalReducer';

function Modal({children,onCreate}) {
  const dispatch = useDispatch()
  const {title} = useSelector(state => state.modal)
  const closeModal = () => {
    dispatch(modalClose())
  }
  return (
    <div
      className="modal fade show"
      id="modal-lg"
      style={{ display: 'block', paddingRight: 14, background: 'rgba(0,0,0,0.5)' }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Добавить {title.toLowerCase()}</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer justify-content-between">
            <button
              type="button"
              className="btn btn-default"
              data-dismiss="modal"
              onClick={closeModal}
            >
              Закрыт
            </button>
            <button type="button" className="btn btn-primary" onClick={onCreate}>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

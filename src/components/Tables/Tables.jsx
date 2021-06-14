import React from 'react';
import { useDispatch } from 'react-redux';
import { modalOpen } from '../../store/reducers/modalReducer';

function Tables({ titleModal,titles, children }) {
  const dispatch = useDispatch()
  const toggleModal = () => {
    dispatch(modalOpen(titleModal))
  }
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{titleModal}</h3>

            <div className="card-tools">
              <div
                className="input-group input-group-sm"
                style={{ width: 250 }}
              >
              <div onClick={toggleModal} className="btn btn-success mr-1">Добавить</div>
                <input
                  type="text"
                  name="table_search"
                  className="form-control float-right"
                  placeholder="Search"
                  style={{ width: 120, height:35 }}
                />
                <div className="input-group-append">
                  <button type="submit" className="btn btn-default">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body table-responsive p-0">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  {titles.map((item, i) => {
                    return <th key={item + i}>{item}</th>;
                  })}
                  <th>Операция</th>
                </tr>
              </thead>
              <tbody>
              {children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;

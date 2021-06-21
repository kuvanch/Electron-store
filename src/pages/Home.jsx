import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

function Home() {
  const dataInvoice = useSelector((state) => state.invoice.data);
  const dataProduct = useSelector((state) => state.product.data);
  const dataUser = useSelector((state) => state.user.data);
  const dataSales = useSelector((state) => state.sales.data);
  console.log(dataSales);
  const invoiceNames = [];
  const invoiceAmounts = [];
  let sumInvoice = 0;
  dataInvoice.map((item) => {
    invoiceAmounts.push(item.amount);
    invoiceNames.push(item.firm);
    sumInvoice += item.amount;
  });

  const dataBar = {
    labels: invoiceNames,
    datasets: [
      {
        label: 'Договоры',
        data: invoiceAmounts,
        backgroundColor: '#007bff',
        borderWidth: 1,
      },
    ],
  };
  const optionsBar = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="content">
      <h3>Главная</h3>
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{dataInvoice.length}</h3>
              <p>Счет фактуры</p>
            </div>
            <div className="icon">
              <i className="fas fa-shopping-cart" />
            </div>
            <Link to="/invoice" className="small-box-footer">
              Подробнее <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>{dataProduct.length}</h3>
              <p>Все товары</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <Link to="/products" className="small-box-footer">
              Подробнее <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>{dataUser.length}</h3>
              <p>Работники</p>
            </div>
            <div className="icon">
              <i className="fas fa-user-plus" />
            </div>
            <Link to="/users" className="small-box-footer">
              Подробнее <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>{dataSales.sales.length}</h3>
              <p>Продажи</p>
            </div>
            <div className="icon">
              <i className="fas fa-chart-pie" />
            </div>
            <Link to='/sales' className="small-box-footer">
              Подробнее <i className="fas fa-arrow-circle-right" />
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between">
                <h3 className="card-title">Договоры</h3>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <p className="d-flex flex-column">
                  <span className="text-bold text-lg">{sumInvoice} сум</span>
                  <span>Договоры за мес</span>
                </p>
                <p className="ml-auto d-flex flex-column text-right">
                  <span className="text-success">
                    <i className="fas fa-arrow-up" /> 33.1%
                  </span>
                  <span className="text-muted">За прошлого мес</span>
                </p>
              </div>
              {/* /.d-flex */}
              <div className="position-relative mb-4">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div />
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div />
                  </div>
                </div>
                <Bar data={dataBar} options={optionsBar} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-0">
              <h3 className="card-title">Работники</h3>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table table-striped table-valign-middle">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Имя</th>
                    <th>Должность</th>
                  </tr>
                </thead>
                <tbody>
                  {dataUser.map((item, i) => {
                    return (
                      <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>{item.login}</td>
                        <td>{item.role}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

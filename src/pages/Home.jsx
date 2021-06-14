import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

function Home() {
  const dataInvoice = useSelector((state) => state.invoice.data);
  const dataProduct = useSelector((state) => state.product.data);
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
              <h3>44</h3>
              <p>User Registrations</p>
            </div>
            <div className="icon">
              <i className="fas fa-user-plus" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>65</h3>
              <p>Unique Visitors</p>
            </div>
            <div className="icon">
              <i className="fas fa-chart-pie" />
            </div>
            <a href="#" className="small-box-footer">
              More info <i className="fas fa-arrow-circle-right" />
            </a>
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
                  <span className="text-muted">Since last month</span>
                </p>
              </div>
              {/* /.d-flex */}
              <div className="position-relative mb-4">
                <div className="chartjs-size-monitor">
                  <div className="chartjs-size-monitor-expand">
                    <div className />
                  </div>
                  <div className="chartjs-size-monitor-shrink">
                    <div className />
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
              <h3 className="card-title">Продажы</h3>
              <div className="card-tools">
                <a href="#" className="btn btn-tool btn-sm">
                  <i className="fas fa-download" />
                </a>
                <a href="#" className="btn btn-tool btn-sm">
                  <i className="fas fa-bars" />
                </a>
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table table-striped table-valign-middle">
                <thead>
                  <tr>
                    <th>Продукт</th>
                    <th>Цена</th>
                    <th>Количество</th>
                    <th>Дата</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="dist/img/default-150x150.png"
                        alt="Product 1"
                        className="img-circle img-size-32 mr-2"
                      />
                      Some Product
                    </td>
                    <td>$13 USD</td>
                    <td>
                      <small className="text-success mr-1">
                        <i className="fas fa-arrow-up" />
                        12%
                      </small>
                      12,000 Sold
                    </td>
                    <td>
                      <a href="#" className="text-muted">
                        <i className="fas fa-search" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="dist/img/default-150x150.png"
                        alt="Product 1"
                        className="img-circle img-size-32 mr-2"
                      />
                      Another Product
                    </td>
                    <td>$29 USD</td>
                    <td>
                      <small className="text-warning mr-1">
                        <i className="fas fa-arrow-down" />
                        0.5%
                      </small>
                      123,234 Sold
                    </td>
                    <td>
                      <a href="#" className="text-muted">
                        <i className="fas fa-search" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="dist/img/default-150x150.png"
                        alt="Product 1"
                        className="img-circle img-size-32 mr-2"
                      />
                      Amazing Product
                    </td>
                    <td>$1,230 USD</td>
                    <td>
                      <small className="text-danger mr-1">
                        <i className="fas fa-arrow-down" />
                        3%
                      </small>
                      198 Sold
                    </td>
                    <td>
                      <a href="#" className="text-muted">
                        <i className="fas fa-search" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="dist/img/default-150x150.png"
                        alt="Product 1"
                        className="img-circle img-size-32 mr-2"
                      />
                      Perfect Item
                      <span className="badge bg-danger">NEW</span>
                    </td>
                    <td>$199 USD</td>
                    <td>
                      <small className="text-success mr-1">
                        <i className="fas fa-arrow-up" />
                        63%
                      </small>
                      87 Sold
                    </td>
                    <td>
                      <a href="#" className="text-muted">
                        <i className="fas fa-search" />
                      </a>
                    </td>
                  </tr>
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

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SideBar.css'

function SideBar() {
  const {login} = useSelector(state => state.auth)
  return (
    <aside className="heightSide main-sidebar sidebar-dark-primary elevation-4">
      <div className="brand-link">
        <img
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: '.8' }}
        />
        <span className="brand-text font-weight-light">Smart Store</span>
      </div>
      {/* Sidebar */}
      <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
        <div className="os-resize-observer-host observed">
          <div
            className="os-resize-observer"
            style={{ left: 0, right: 'auto' }}
          />
        </div>
        <div
          className="os-size-auto-observer observed"
          style={{ height: 'calc(100% + 1px)', float: 'left' }}
        >
          <div className="os-resize-observer" />
        </div>
        <div
          className="os-content-glue"
          style={{ margin: '0px -8px', width: 249, height: 466 }}
        />
        <div className="os-padding">
          <div
            className="os-viewport os-viewport-native-scrollbars-invisible"
            style={{ overflowY: 'scroll' }}
          >
            <div
              className="os-content"
              style={{ padding: '0px 8px', height: '100%', width: '100%' }}
            >
              {/* Sidebar user panel (optional) */}
              <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                  <img
                    src="dist/img/user2-160x160.jpg"
                    className="img-circle elevation-2"
                    alt="User Image"
                  />
                </div>
                <div className="info">
                  <a className="d-block">
                    {login}
                  </a>
                </div>
              </div>
              {/* Sidebar Menu */}
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="nav-icon fas fa-tachometer-alt" />
                      <p>
                        Главная
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/store" className="nav-link">
                      <i className="nav-icon fas fa-th" />
                      <p>
                        Выберите склад
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/search" className="nav-link">
                      <i className="nav-icon fas fa-search" />
                      <p>
                        Поиск товара
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link">
                      <i className="nav-icon fas fa-copy" />
                      <p>
                        Товары
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/invoice" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie" />
                      <p>
                        Счет фактура
                      </p>
                    </Link>
                  </li>
              </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ width: '100%', transform: 'translate(0px, 0px)' }}
            />
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ height: '34.641%', transform: 'translate(0px, 0px)' }}
            />
          </div>
        </div>
        <div className="os-scrollbar-corner" />
      </div>
    </aside>
  );
}

export default SideBar;

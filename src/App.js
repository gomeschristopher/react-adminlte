
import { useState } from 'react';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function handleSwitchSidebarOpen() {
    console.log('clicked')
    setSidebarOpen(prevState => !prevState);
  }

  return (
    <div className={["layout-fixed sidebar-expand-lg bg-body-tertiary app-loaded", sidebarOpen ? " sidebar-open" : " sidebar-collapse"]}>
      <div className="app-wrapper ">
        <nav className="app-header navbar navbar-expand bg-body">
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item"> <a className="nav-link" data-lte-toggle="sidebar" onClick={() => handleSwitchSidebarOpen()} role="button"> <i className="bi bi-list"></i> </a> </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"> <a className="nav-link" data-lte-toggle="fullscreen"> <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen"></i> </a> </li>
            </ul>
          </div>
        </nav>
        <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
          <div className="sidebar-wrapper">
            <nav className="mt-2">
              <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                <li className="nav-item"> <a href="./generate/theme.html" className="nav-link active"> <i className="nav-icon bi bi-palette"></i>
                  <p>Theme Generate</p>
                </a> </li>
                <li className="nav-item"> <a href="./docs/introduction.html" className="nav-link"> <i className="nav-icon bi bi-download"></i>
                  <p>Installation</p>
                </a> </li>
                <li className="nav-item"> <a href="./docs/layout.html" className="nav-link"> <i className="nav-icon bi bi-grip-horizontal"></i>
                  <p>Layout</p>
                </a> </li>
                <li className="nav-item"> <a href="./docs/color-mode.html" className="nav-link"> <i className="nav-icon bi bi-star-half"></i>
                  <p>Color Mode</p>
                </a> </li>
              </ul>
            </nav>
          </div>
        </aside>
        <main className="app-main">
          <div className="app-content-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="mb-0">Dashboard</h3>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-end">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Dashboard
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="app-footer">
          <div className="float-end d-none d-sm-inline">Anything you want</div> <strong>
            Copyright &copy; 2014-2024&nbsp;
            <a href="https://adminlte.io" className="text-decoration-none">AdminLTE.io</a>.
          </strong>
          All rights reserved.
        </footer>
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      </div>
    </div>
  );
}

export default App;

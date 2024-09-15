import { useState } from "react";
import Clients from "./Clients/Clients";

export default function Panel() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    function handleSwitchSidebarOpen() {
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
                                <li className="nav-item"> <a className="nav-link active"> <i className="nav-icon bi bi-palette"></i>
                                    <p>Clientes</p>
                                </a> </li>
                                <li className="nav-item"> <a className="nav-link"> <i className="nav-icon bi bi-download"></i>
                                    <p>Installation</p>
                                </a> </li>
                                <li className="nav-item"> <a className="nav-link"> <i className="nav-icon bi bi-grip-horizontal"></i>
                                    <p>Layout</p>
                                </a> </li>
                                <li className="nav-item"> <a className="nav-link"> <i className="nav-icon bi bi-star-half"></i>
                                    <p>Color Mode</p>
                                </a> </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <main className="app-main">
                    <Clients />
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
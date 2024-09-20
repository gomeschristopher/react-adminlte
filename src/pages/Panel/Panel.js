import { useState } from "react";
import { NavLink, Outlet, useNavigate, useNavigation } from "react-router-dom";

const pages = [
    { url: 'products', name: 'Produtos', icon: "nav-icon bi bi-box" },
    { url: 'clients', name: 'Clientes', icon: "nav-icon bi bi-people" },
];

export default function Panel() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const navigate = useNavigate();
    const navigation = useNavigation();

    function handleSwitchSidebarOpen() {
        setSidebarOpen(prevState => !prevState);
    }

    function handleLogout() {
        navigate('/');
    }

    return (
        <div className={["layout-fixed sidebar-expand-lg bg-body-tertiary app-loaded", sidebarOpen ? " sidebar-open" : " sidebar-collapse"]}>
           
            <div className="app-wrapper ">
                <nav className="app-header navbar navbar-expand bg-body">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-lte-toggle="sidebar"
                                    onClick={() => handleSwitchSidebarOpen()} role="button">
                                    <i className="bi bi-list"></i>
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" data-lte-toggle="fullscreen" onClick={handleLogout} role="button">
                                    <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
                    <div className="sidebar-wrapper">
                        <nav className="mt-2">
                            <ul className="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                                {pages.map(page => (
                                    <li key={page.url} className="nav-item">
                                        <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={page.url}>
                                            <i className={page.icon}></i>
                                            <p>{page.name}</p>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>
                <main className="app-main">
                {navigation.state === 'loading' && <p>Loading...</p>}
                    <Outlet />
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
import { Outlet, useNavigate } from "react-router-dom";

export default function Clients() {
    const navigate = useNavigate();

    function handleCreateNewClient() {
        navigate('/panel/clients/new');
    }

    return (
        <>
            <div className="app-content-header">
                <div className="container-fluid">
                    <div className="d-flex justify-content-between">
                        <h3 className="mb-0">fetchEvents</h3>
                        <button className="btn btn-secondary" onClick={handleCreateNewClient}>Novo</button>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
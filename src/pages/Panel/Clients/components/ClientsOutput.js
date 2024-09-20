import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

import { ClientsContext } from "../../../../store/clients-context";
import { useNavigate } from "react-router-dom";

export default function ClientsOutput() {
    const clientsData = useLoaderData();

    const clientsCtx = useContext(ClientsContext);

    useEffect(() => {
        clientsCtx.setClients(clientsData.events);
    }, []);


    const navigate = useNavigate();

    function onEditClient(clientId) {
        navigate('/panel/clients/' + clientId);
    }

    function removeClient(clientId) {
        clientsCtx.deleteClient(clientId);
    }

    const clients = clientsCtx.clients;

    return (
        <div className="app-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h3 className="card-title">Simple Full Width Table</h3>
                            </div>
                            <div className="card-body p-0">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Description</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clients.map(client => {
                                            return (
                                                <tr key={client.id} className="align-middle">
                                                    <td>{client.title}</td>
                                                    <td>{client.description}</td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button className="btn btn-secondary" onClick={() => onEditClient(client.id)}>
                                                                <i className="bi bi-pencil-square"></i>
                                                            </button>
                                                            <button className="btn btn-danger" onClick={() => removeClient(client.id)}>
                                                                <i className="bi bi-trash"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <ul className="pagination pagination-sm float-end">
                                    <li className="page-item"> <a className="page-link">&laquo;</a> </li>
                                    <li className="page-item"> <a className="page-link">1</a> </li>
                                    <li className="page-item"> <a className="page-link">2</a> </li>
                                    <li className="page-item"> <a className="page-link">3</a> </li>
                                    <li className="page-item"> <a className="page-link">&raquo;</a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function loader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        //setError('Fetching events failed.');
    } else {
       return response;
    }
}
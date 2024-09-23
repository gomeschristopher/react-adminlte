import { Suspense, useContext, useEffect } from "react";
import { Await, defer, json, redirect, useLoaderData, useSubmit } from "react-router-dom";

import { ClientsContext } from "../../../../store/clients-context";
import { useNavigate } from "react-router-dom";

export default function ClientsOutput() {
    const { clients } = useLoaderData();
    //const clients = clientsData;

    const submit = useSubmit();

    //const clientsCtx = useContext(ClientsContext);

    //useEffect(() => {
    //    console.log(clientsData)
    //    clientsCtx.setClients(clientsData);
    //}, []);


    const navigate = useNavigate();

    function onEditClient(clientId) {
        navigate('/panel/clients/' + clientId);
    }

    function removeClient(clientId) {
        const haveConfirm = window.confirm('Are u sure?');

        if (haveConfirm) {
            submit({
                clientId
            }, { method: 'DELETE' });
        }
    }

    return (
        <Suspense fallback={<div className="text-center"><div className="spinner-border text-secondary" role="status"> <span className="visually-hidden">Loading...</span> </div></div>}>
            <Await resolve={clients}>
                {(loadedClients) => (
                    <div className="app-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card mb-4">
                                        <div className="card-header">
                                            <h3 className="card-title">Simple Full Width Table</h3>
                                        </div>
                                        <div className="card-body p-0 table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {loadedClients.map(client => {
                                                        return (
                                                            <tr key={client.id} className="align-middle">
                                                                <td>{client.name}</td>
                                                                <td>{client.email}</td>
                                                                <td>{client.phone}</td>
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
                )}
            </Await>
        </Suspense>
    )
}

async function loadClients() {
    const response = await fetch('http://localhost:80/api/contacts');
    if (!response.ok) {
        throw json(
            { message: 'Could not fetch the clients.' },
            { status: 500 }
        );
    } else {
        const responseData = await response.json();
        return responseData;
    }
}

export function loader() {
    return defer({
        clients: loadClients()
    });
}

export async function actionDeleteClient({ request, params }) {
    const data = await request.formData();

    const id = params.clientId;

    const response = await fetch('http://localhost:80/api/contacts/' + data.get('clientId'), {
        method: request.method,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        const error = await response.text()

        throw json(
            { message: JSON.parse(error).message },
            { status: 500 }
        );
    }

    return redirect('/panel/clients');
}
export default function ClientsOutput({ clients, editClient, removeClient }) {
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
                                            <th>Nome</th>
                                            <th>Telefone</th>
                                            <th>Email</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clients.map(client => {
                                            return (
                                                <tr key={client.id} className="align-middle">
                                                    <td>{client.name}</td>
                                                    <td>{client.phone}</td>
                                                    <td>{client.email}</td>
                                                    <td>
                                                        <div className="btn-group">
                                                            <button className="btn btn-secondary" onClick={() => editClient(client.id)}>
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
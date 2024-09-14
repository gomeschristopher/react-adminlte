export default function ClientsOutput() {
    return (
        <div className="app-content">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-4">
                            <div className="card-header">
                                <h3 className="card-title">Simple Full Width Table</h3>
                                <div className="card-tools">
                                    <ul className="pagination pagination-sm float-end">
                                        <li className="page-item"> <a className="page-link" href="#">&laquo;</a> </li>
                                        <li className="page-item"> <a className="page-link" href="#">1</a> </li>
                                        <li className="page-item"> <a className="page-link" href="#">2</a> </li>
                                        <li className="page-item"> <a className="page-link" href="#">3</a> </li>
                                        <li className="page-item"> <a className="page-link" href="#">&raquo;</a> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Task</th>
                                            <th>Progress</th>
                                            <th>Label</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="align-middle">
                                            <td>1.</td>
                                            <td>Update software</td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-danger"></div>
                                                </div>
                                            </td>
                                            <td><span className="badge text-bg-danger">55%</span></td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>2.</td>
                                            <td>Clean database</td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar text-bg-warning"></div>
                                                </div>
                                            </td>
                                            <td> <span className="badge text-bg-warning">70%</span> </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>3.</td>
                                            <td>Cron job running</td>
                                            <td>
                                                <div className="progress progress-xs progress-striped active">
                                                    <div className="progress-bar text-bg-primary"></div>
                                                </div>
                                            </td>
                                            <td> <span className="badge text-bg-primary">30%</span> </td>
                                        </tr>
                                        <tr className="align-middle">
                                            <td>4.</td>
                                            <td>Fix and squish bugs</td>
                                            <td>
                                                <div className="progress progress-xs progress-striped active">
                                                    <div className="progress-bar text-bg-success"></div>
                                                </div>
                                            </td>
                                            <td> <span className="badge text-bg-success">90%</span> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
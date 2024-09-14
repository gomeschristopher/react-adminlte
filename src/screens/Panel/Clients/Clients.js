import ClientForm from "./Screens/ClientForm";
import ClientsOutput from "./Screens/ClientsOutput";

export default function Clients() {
    return (
        <>
            <div className="app-content-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 className="mb-0">Clientes</h3>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-end">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Simple Tables
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <ClientsOutput />
        </>
    )
}